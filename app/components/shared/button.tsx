import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    link: string;
    children: React.ReactNode;
}


export default function Button({link, children }: ButtonProps) {
  return (
    <Link to={link} className="flex flex-row items-end gap-3 justify-end">
      <span className="bg-light rounded-full px-36 py-4 italic text-2xl">{children}</span>
      <span className="bg-light p-4 rounded-full">
        <ArrowRight size={32} strokeWidth={1.5} />
      </span>
    </Link>
  );
}
