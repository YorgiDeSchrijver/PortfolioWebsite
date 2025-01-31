import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import Head from "~/components/home/head";
import { Card, CardContent } from "~/components/shared/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/shared/carousel";
import Header from "~/components/shared/header";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div className="px-16 overflow-hidden relative">
      <Header />
      <Head />
      <Carousel
        className="w-full my-10 relative"
        opts={{
          loop: true,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-[27.5%] bg-gradient-to-r from-dark to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[27.5%] bg-gradient-to-l from-dark to-transparent z-20"></div>
        </div>
        <CarouselContent className="relative z-10 ml-0">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[45%] px-3 ">
              <Card className="rounded-[4rem] bg-transparent border-none overflow-hidden relative">
                <CardContent className="flex flex-col items-end justify-between p-0">
                  <img
                    src="/assets/images/test.jpg"
                    className="absolute w-full h-full top-0 left-0 z-0"
                    alt=""
                  />
                  <div className="w-2/3 z-10 h-full bg-dark bg-opacity-90 gap-8 py-10 px-20 flex flex-col items-start justify-between m-0">
                    <h1 className="text-light font-mono text-2xl font-medium">
                      The simplest example is kafka + golang
                    </h1>
                    <p className="text-light font-sans text-lg">
                      This article presents a simple way to implement a micro-service architecture using kafka, Golang
                      and Docker
                    </p>
                    <Link to="" className="flex flex-row items-end gap-3 justify-end">
                      <span className="bg-light rounded-full px-16 py-3 italic text-xl">Read more</span>
                      <span className="bg-light p-4 rounded-full">
                        <ArrowRight size={24} strokeWidth={1.5} />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="p-12 left-0 bg-transparent border border-grayLight hover:bg-transparent z-30 text-light" />
        <CarouselNext className="p-12 right-0 bg-transparent border border-grayLight hover:bg-transparent z-30 text-light" />
      </Carousel>
    </div>
  );
}
