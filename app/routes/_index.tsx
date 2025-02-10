import type { MetaFunction } from "@remix-run/node";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Textfit } from "react-textfit";
import HeadLink from "~/components/home/head-link";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import LinkButton from "~/components/shared/link-button";

export const meta: MetaFunction = () => {
  return [{ title: "Yorgi De Schrijver | Home" }, { name: "description", content: "Portfolio homepage Yorgi De Schrijver " }];
};

const links = [
  { to: "/", label: "Main" },
  { to: "/blog", label: "About" },
  { to: "/projects", label: "Blog" },
  { to: "/contact", label: "Projects" },
];

const workExperiences = [
  {
    period: "2025 - Present",
    duration: "1 month",
    company: "Cloudar",
    role: "Internship development",
  },
  {
    period: "2024 - Present",
    duration: "3 months",
    company: "Wolf Food Market",
    role: "Studentjob",
  },
  {
    period: "2023 - 2024",
    duration: "11 months",
    company: "AZ Klina",
    role: "Studentjob",
  },
  {
    period: "2022 - 2023",
    duration: "1 year",
    company: "Plein Publiek",
    role: "Studentjob",
  },
];

export default function Index() {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 h-80 w-80 flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none z-[100]" />
      <Header />
      {/* Start Head */}
      <div className=" px-16 gap-y-32 mt-16 flex-col flex items-center justify-center relative h-screen">
        <div className=" gap-y-32 flex-col flex z-50">
          <div className="flex">
            <Textfit mode="single" max={4000} className="w-2/3 text-light font-mono font-semibold leading-[0.7]">
              Full-stack
            </Textfit>
            <div className="w-1/3 flex flex-row items-end gap-3 justify-end">
              <LinkButton link="/projects">Projects</LinkButton>
            </div>
          </div>
          <div className="flex">
            <p className="w-1/3 text-gray-light text-2xl font-sans font-normal">
              My goal is to <span className="text-light">write maintainable, clean </span>and{" "}
              <span className="text-light">understandable code </span>to process development was enjoyable.
            </p>
            <Textfit mode="single" max={4000} className="w-2/3 pl-40 text-light font-mono font-semibold leading-[0.7]">
              Developer
            </Textfit>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center justify-center">
          <HeadLink href="https://github.com/YorgiDeSchrijver" icon={<Github />} text="GitHub" />
          <HeadLink href="https://www.linkedin.com/in/yorgi-de-schrijver/" icon={<Linkedin />} text="LinkedIn" />
        </div>
        <div className="absolute top-1/12 right-2/12 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75" />
        <div className="absolute bottom-1/12 left-2/12 bg-radial rounded-full from-yellow-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75" />
      </div>
      {/* End Head */}
      {/* Start Section about */}
      <div className="mx-48">
        <div className="grid grid-cols-2 mb-32">
          <p className="text-light font-sans font-semibold text-xl ">... /About me ...</p>
          <p className="w-2/3 text-gray-light text-2xl font-sans font-normal z-10 -ml-20">
            Hello! I&apos;m <span className="text-light">Yorgi</span>, a <span className="text-light">student</span>{" "}
            from Antwerp. I&apos;m currently pursuing a degree in <span className="text-light">Informatics</span> at{" "}
            <span className="text-light">AP Hogeschool Antwerp</span>.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-16 relative">
          <div className="grid grid-cols-2 grid-rows-4 gap-6 col-span-1 row-span-4">
            <div className="col-span-2 bg-light p-8 rounded-[2.5rem] border border-light">
              <h1 className="text-gray-dark text-3xl mb-5 font-medium">Front-end</h1>
              <p className="text-dark text-xl font-mono leading-10">
                TypeScript / React / NextJs / Remix / React Native / Jest / GraphQL / Prettier
              </p>
            </div>
            <div className="row-start-2 bg-dark p-8 rounded-[2.5rem] border border-gray-dark">
              <h1 className="text-gray-light text-3xl mb-5 font-medium">Styles</h1>
              <p className="text-light text-xl tracking-wide leading-10 line-clamp-2">
                Tailwind CSS / SCSS / Material UI / PostCSS / CSS-in-JS
              </p>
            </div>
            <div className="row-start-2 flex justify-center items-center">
              <a href="https://github.com/YorgiDeSchrijver" className="flex flex-row justify-center items-center">
                <div className="p-6 border border-gray-light rounded-full">
                  <Github className="fill-light stroke-light" size={24} />
                </div>
                <div className="bg-light rounded-full p-5 border border-light -translate-x-1/3">
                  <ArrowUpRight className=" stroke-dark" strokeWidth={1.5} size={32} />
                </div>
              </a>
            </div>
            <div className="col-span-2 row-start-3 bg-dark p-8 rounded-[2.5rem] border border-gray-dark z-10">
              <h1 className="text-gray-light text-3xl mb-5 font-medium">Back-end</h1>
              <p className="text-light text-xl tracking-wide">TypeScript / React / NextJs / Remix / React Native / </p>
            </div>
            <div className="row-start-4">7</div>
            <div className="row-start-4  bg-dark p-8 rounded-[2.5rem] border border-gray-dark z-10">
              <h1 className="text-gray-light text-3xl mb-5 font-medium">DevOps</h1>
              <p className="text-light text-xl tracking-wide">TypeScript / React / NextJs / Remix / React Native / </p>
            </div>
          </div>
          <div className="col-span-1 row-span-3 flex justify-end items-center z-30">
            <div className="w-2/3 h-full overflow-hidden rounded-[2.5rem]">
              <img className="object-cover w-full h-full" src="/assets/images/portrait.jpg" alt="" />
            </div>
          </div>
          <div className="absolute -top-5 right-0 translate-x-1/3 -translate-y-1/3 size-[50rem] flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none z-[0]" />
          <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-3/4 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75" />
        </div>
      </div>
      {/* End Section about */}
      {/* Start Section work */}
      <div className="z-10 mb-10">
        <h1 className="text-[10rem] font-medium font-mono text-light text-right mr-48 p-0 m-0">Work</h1>
        <div className="flex flex-col justify-center items-center">
          {workExperiences.map((work, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 border-t border-gray-dark w-full px-48 py-4 z-10 hover:bg-light group"
            >
              <div className="pr-4 border-gray-dark col-span-1">
                <p className="text-xl text-light group-hover:text-dark">{work.period}</p>
                <p className="text-sm text-gray-light group-hover:text-dark">{work.duration}</p>
              </div>
              <p className="text-2xl text-light leading-[200%] col-span-2 group-hover:text-dark">{work.company}</p>
              <p className="text-2xl text-light leading-[200%] col-span-3 group-hover:text-dark">{work.role}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End Section Work */}
      {/* Start Section Footer */}
      <Footer links={links} />
    </div>
  );
}
