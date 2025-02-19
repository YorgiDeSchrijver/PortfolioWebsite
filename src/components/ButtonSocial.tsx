import { cloneElement, ReactNode } from "react";

interface HeadLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
}

export default function ButtonSocial({ href, icon, text }: HeadLinkProps) {
  return (
    <a
      href={href}
      className="rounded-full gap-4 font-medium flex flex-row justify-center items-center text-xl font-sans text-gray-light border-gray-dark border py-4 px-8 italic tracking-tight bg-dark"
    >
      {cloneElement(icon as React.ReactElement<any>, { className: "text-light fill-light" })}
      {text}
    </a>
  );
}
