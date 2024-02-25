import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

function HOme({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h1 className="scroll-m-20 my-7 text-center uppercase text-4xl tracking-wider font-extrabold lg:text-6xl">
        Welcome to <span className="text-primary">Quizzy</span>
      </h1>
      <span className="text-gray-600 font-semibold">Simple Clean Best</span>
      <div className="mt-8 flex gap-6 flex-wrap items-center justify-center">
        <Link href={`/explore`}>
          <Button className="rounded-full min-w-28" size={"lg"}>
            Explore
          </Button>
        </Link>
        <Link href={`/login`}>
          <Button
            size={"lg"}
            className="rounded-full min-w-28"
            variant={"secondary"}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HOme;
