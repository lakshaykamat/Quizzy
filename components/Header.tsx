"use client";
import { APP } from "@/lib/data/local/Nav";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ThemeToggle } from "./ThemeToggle";
import LOCAL_USER from "@/lib/data/local/User";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="bg-background border-b-2 items-center py-3 flex justify-around">
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
        <div className="flex gap-2">
          <ThemeToggle />
          <Avatar>
            <AvatarImage
              className="w-10 rounded-full h-10"
              src={LOCAL_USER.image}
            />
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
