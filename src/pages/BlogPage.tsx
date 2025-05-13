import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Header from "../components/Header";
import usePosts from "../hooks/usePosts";

const links = [
  { to: "/", label: "Main" },
  { to: "/blog", label: "About" },
  { to: "/projects", label: "Blog" },
  { to: "/contact", label: "Projects" },
];

export default function BlogPage() {
    const { posts } = usePosts();

  return (
    <div className="overflow-hidden relative">
      <Header />
      <div className="mx-48 mt-32 mb-48">
        <h1 className="text-[10rem] font-medium font-mono text-light text-center p-0 m-0">
          Blog posts
        </h1>
        <hr className="border border-gray-dark/60 -mx-48 mt-0" />
        <div className="grid grid-cols-3 gap-4 max-w-screen mx-auto mt-16">
          {posts && posts.map((post) => (
            <div
              key={post.fileName}
              className="rounded-[2.5rem] px-12 py-5 gap-4 flex flex-col text-light border border-gray-dark/60"
            >
              <h1 className="text-light font-mono text-2xl font-medium line-clamp-2">
                <Markdown
                  options={{
                    overrides: {
                      p: {
                        props: {
                          className: "hidden",
                        },
                      },
                    },
                  }}
                >
                  {post.content}
                </Markdown>
              </h1>
              <p className="text-gray-light font-sans text-md line-clamp-3">
                <Markdown
                  options={{
                    overrides: {
                      h1: {
                        props: {
                          className: "hidden",
                        },
                      },
                    },
                  }}
                >
                  {post.content}
                </Markdown>
              </p>
              <Link
                to={`/blog/${post.fileName}`}
                className="flex flex-row items-end gap-3 justify-start mt-4"
              >
                <span className="bg-light text-dark rounded-full px-12 py-3 italic font-medium">
                  Read more
                </span>
                <span className="bg-light p-3 rounded-full text-dark">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer links={links} />
    </div>
  );
}
