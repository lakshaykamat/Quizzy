"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="bg-background border-b-2 items-center py-3 flex justify-around">
        <h1 className="text-2xl font-bold">{"Quiz Web"}</h1>
        <div className="gap-6 hidden sm:flex">
          <span className="text-sm hover:underline cursor-pointer">Home</span>
          <Link
            href={`/explore`}
            className="text-sm hover:underline cursor-pointer"
          >
            Explore
          </Link>
          <span className="text-sm hover:underline cursor-pointer">
            Friends
          </span>
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <Avatar>
            <AvatarImage
              className="w-10 rounded-full h-10"
              src={"https://github.com/lakshaykamat.png"}
            />
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
