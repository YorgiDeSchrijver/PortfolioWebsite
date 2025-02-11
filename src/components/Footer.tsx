import { Github, Linkedin } from "lucide-react";
import ButtonSocial from "./ButtonSocial";
import { Link } from "react-router-dom";
import { Textfit } from "react-textfit";

export default function Footer({ links }: { links: { to: string; label: string }[] }) {
  return (
    <footer className="px-48 py-16 relative">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 text-light ">
        <div className="col-span-3 row-span-2 col-start-1 row-start-2 grid grid-cols-3 grid-rows-2 gap-4 z-20">
          <div className="col-span-2 ">
            <Textfit
              mode="single"
              max={500}
              className="text-light font-mono font-semibold leading-[0.7] "
            >
              De Schrijver
            </Textfit>
          </div>
          <div className="col-span-2 col-start-2 row-start-2">
            <Textfit
              mode="single"
              max={500}
              className="w-2/3 text-light font-mono font-semibold leading-[0.7]"
            >
              Yorgi
            </Textfit>
          </div>
          <div className="col-start-1 row-start-2 text-gray-light text-3xl font-sans">
            Full-Stack
            <br className="mb-2" />
            Developer
          </div>
        </div>
        <div className="row-span-2 col-start-4 row-start-2 gap-8 flex flex-col z-10">
          <div className="rounded-[2.5rem] border border-gray-dark p-8 bg-dark">
            <h1 className="text-gray-light text-3xl mb-5 font-medium">Site</h1>
            <p className="text-xl gap-2 font-mono">
              Handcrafted by me / <br className="mb-2.5" />
              Powered by React
            </p>
          </div>
          <div className="flex flex-row gap-8 items-center justify-center z-10">
            <ButtonSocial
              href="https://github.com/YorgiDeSchrijver"
              icon={<Github />}
              text="GitHub"
            />
            <ButtonSocial
              href="https://www.linkedin.com/in/yorgi-de-schrijver/"
              icon={<Linkedin />}
              text="LinkedIn"
            />
          </div>
        </div>
        <div className="col-start-4 row-start-1 z-10">
          <p className="text-light font-sans font-semibold text-3xl mb-10">... /Contacts ...</p>
          <nav className="flex items-center justify-between text-light font-medium">
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/4  translate-y-1/2 size-[70rem] flex items-center justify-center rounded-full border-2 opacity-60 border-gray-dark pointer-events-none z-[0]" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 bg-radial rounded-full from-yellow-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75" />
    </footer>
  );
}
