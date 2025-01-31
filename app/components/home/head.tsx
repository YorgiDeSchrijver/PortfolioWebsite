import { Github, Linkedin } from "lucide-react";
import { Textfit } from "react-textfit";
import LinkButton from "../shared/link-button";
import HeadLink from "./head-link";

export default function Head() {
  return (
    <div className="mt-32 mb-16 gap-y-32 flex-col flex relative">
      <div className=" gap-y-24 flex-col flex z-50">
        <div className="flex">
          <Textfit mode="single" max={500} className="w-2/3 text-light font-mono font-semibold leading-[0.7]">
            Full-stack
          </Textfit>
          <div className="w-1/3 flex flex-row items-end gap-3 justify-end">
            <LinkButton link="/projects">Projects</LinkButton>
          </div>
        </div>
        <div className="flex">
          <p className="w-1/3 text-gray-light text-2xl font-mono font-normal">
            My goal is to <span className="text-light">write maintainable, clean </span>and{" "}
            <span className="text-light">understandable code </span>to process development was enjoyable.
          </p>
          <Textfit mode="single" max={500} className="w-2/3 pl-40 text-light font-mono font-semibold leading-[0.7]">
            Developer
          </Textfit>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center">
        <HeadLink href="https://github.com/YorgiDeSchrijver" icon={<Github />} text="GitHub" />
        <HeadLink href="https://www.linkedin.com/in/yorgi-de-schrijver/" icon={<Linkedin />} text="LinkedIn" />
      </div>
      <div className="absolute -top-1/6 right-2/12 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-96 z-0 opacity-65" />
      <div className="absolute bottom-0 left-2/12 bg-radial rounded-full from-yellow-900 from-0% to-dark to-70% size-96 z-0 opacity-65" />
    </div>
  );
}
