import { Link } from "@remix-run/react";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

const textVariants = cva("", {
  variants: {
    size: {
      default: "px-36 py-4 text-2xl",
      md: "px-16 py-3.5 text-xl",
      sm: "px-16 py-2 text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const iconVariants = cva("", {
  variants: {
    iconSize: {
      default: "p-4",
      md: "p-3",
      sm: "p-2",
    },
  },
  defaultVariants: {
    iconSize: "default",
  },
});

interface LinkButtonProps extends VariantProps<typeof textVariants>, VariantProps<typeof iconVariants> {
  link: string;
  children: React.ReactNode;
}

export default function LinkButton({ link, children, size, iconSize }: LinkButtonProps) {
  const textClass = textVariants({ size });
  const iconClass = iconVariants({ iconSize });
  return (
    <Link to={link} className="flex flex-row items-end gap-3 justify-end">
      <span className={`bg-light text-dark text-nowrap rounded-full italic ${textClass}`}>{children}</span>
      <span className={`bg-light rounded-full text-dark ${iconClass}`}>
        <ArrowRight size={32} strokeWidth={1.5} />
      </span>
    </Link>
  );
}
