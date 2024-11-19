export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "HOME",
    children: [
      {
        name: "Dashboard",
        icon: "hugeicons:home-04",
        id: uniqueId(),
        url: "/",
      },
      {
        name: "Pricing",
        icon: "hugeicons:money-receive-circle",
        id: uniqueId(),
        url: "/pricing",
      },
    ],
  },
  {
    heading: "RestFul APIs",
    children: [
      {
        name: "Artificial Intelligence",
        icon: "hugeicons:ai-brain-05",
        id: uniqueId(),
        url: "/ai",
      },
      {
        name: "Anime",
        icon: "hugeicons:star-face",
        id: uniqueId(),
        url: "/anime",
      },
      {
        name: "Downloader",
        icon: "hugeicons:file-download",
        id: uniqueId(),
        url: "/downloader",
      },
      {
        name: "Tools",
        icon: "hugeicons:pen-tool-03",
        id: uniqueId(),
        url: "/tools",
      },
      {
        name: "Islamic",
        icon: "hugeicons:the-prophets-mosque",
        id: uniqueId(),
        url: "/islamic",
      },
      {
        name: "Game",
        icon: "hugeicons:gameboy",
        id: uniqueId(),
        url: "/game",
      },
      {
        name: "Fun",
        icon: "hugeicons:laughing",
        id: uniqueId(),
        url: "/fun",
      },
      {
        name: "Primbon",
        icon: "hugeicons:stars",
        id: uniqueId(),
        url: "/primbon",
      },
    ],
  },
  {
    heading: "AUTH",
    children: [
      {
        name: "Login",
        icon: "hugeicons:login-03",
        id: uniqueId(),
        url: "/auth/login",
      },
      {
        name: "Register",
        icon: "hugeicons:download-02", 
        id: uniqueId(),
        url: "/auth/register",
      },
    ],
  },
];

export default SidebarContent;