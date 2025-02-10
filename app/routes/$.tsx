import Header from "~/components/shared/header";

export default function errorpage() {
  return (
    <>
      <Header />
      <div className="bg-dark h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-light text-7xl font-bold">404</h1>
        <p className="text-white">Page not found</p>
      </div>
    </>
  );
}
