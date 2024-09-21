import { LinkProps } from "@tanstack/react-router";
import ChartIcon from "./icons/chart";
import PaintIcon from "./icons/paint";
import BasketIcon from "./icons/basket";
import RecieptIcon from "./icons/reciept";
import DollarIcon from "./icons/dollar";

interface NavigationData {
  text: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  to: LinkProps["to"];
}

const sidebarNavigation: NavigationData[] = [
  {
    to: "/",
    text: "DASHBOARD",
    Icon: ChartIcon,
  },
  {
    to: "/products",
    text: "PRODUCTS",
    Icon: BasketIcon,
  },
  {
    to: "/orders",
    text: "ORDERS",
    Icon: RecieptIcon,
  },
  {
    to: "/sales",
    text: "SALES",
    Icon: DollarIcon,
  },
  {
    to: "/site",
    text: "SITE",
    Icon: PaintIcon,
  },
  // {

  // }
];

export default sidebarNavigation;
