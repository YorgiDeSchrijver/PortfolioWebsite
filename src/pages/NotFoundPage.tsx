import Footer from "../components/Footer";
import Header from "../components/Header";

const links = [
  { to: "/", label: "Main" },
  { to: "/blog", label: "About" },
  { to: "/projects", label: "Blog" },
  { to: "/contact", label: "Projects" },
];

export default function NotFoundPage() {
  return (
    <div className="overflow-hidden relative">
      <Header />
      <div className="bg-dark h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-light text-[10rem] font-black">404</h1>
        <p className="text-white text-8xl font-semibold">Page not found</p>
      </div>
      <Footer links={links} />
    </div>
  );
}
