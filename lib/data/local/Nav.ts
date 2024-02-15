type Link = {
  name: string,
  path: string,
};

type App = {
  appName: string,
  link: Link[],
};

export const APP: App = {
  appName: "Quizzy",
  link: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Friends",
      path: "/friends",
    },
    {
      name: "About",
      path: "/about",
    },
  ],
};
