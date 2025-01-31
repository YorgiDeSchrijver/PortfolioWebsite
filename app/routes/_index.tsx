import type { MetaFunction } from "@remix-run/node";
import Head from "~/components/home/head";
import Header from "~/components/shared/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="px-16 overflow-hidden relative">
      <Header />
      <Head />
    </div>
  );
}
