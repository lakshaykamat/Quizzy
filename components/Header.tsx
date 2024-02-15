"use client";
import { APP } from "@/lib/data/local/Nav";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="bg-primary-foreground items-center py-3 flex justify-around">
        <h1 className="text-2xl font-bold">{APP.appName}</h1>
        <div className="flex gap-6">
          <span className="text-sm hover:underline cursor-pointer">Home</span>
          <span className="text-sm hover:underline cursor-pointer">
            Categories
          </span>
          <span className="text-sm hover:underline cursor-pointer">
            Friends
          </span>
        </div>
        <Avatar>
          <AvatarImage
            className="w-10 rounded-full h-10"
            src="https://github.com/lakshaykamat.png"
          />
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default Header;
