import { LoaderFunctionArgs } from "@remix-run/node";
import Header from "~/components/shared/header";
import fs from "fs";
import path from "path";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Footer from "~/components/shared/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Yorgi De Schrijver | Blog" },
    { name: "description", content: "Portfolio homepage Yorgi De Schrijver " },
  ];
};


const links = [
  { to: "/", label: "Main" },
  { to: "/blog", label: "About" },
  { to: "/projects", label: "Blog" },
  { to: "/contact", label: "Projects" },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const postsDirectory = path.join(process.cwd(), "/public/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const post = fileNames.find((fileName) => fileName === `${params.id}.md`);
  if (!post) {
    throw new Error("Post not found");
  }
  const filePath = path.join(postsDirectory, post);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return { content };
}

export default function BlogPost() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="overflow-hidden relative">
      <Header />
      <div className="mt-48 mb-48 max-w-2xl mx-auto hyphens-auto break-words">
        <Markdown className="text-light" options={{
            overrides: {
                h1: {
                    props: {
                        className: "text-5xl font-sans font-bold mb-16"
                    }
                },
                p: {
                    props: {
                        className: "text-lg font-sans my-6"
                    }
                }
            }
        }}>{data.content}</Markdown>
      </div>
      <Footer links={links} />
    </div>
  );
}
