import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Route {
  to: string;
  path: string;
  name: string;
  Component: React.FC;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lp1" */'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: "/noLazy",
    path: "noLazy",
    name: "No Lazy",
    Component: NoLazy,
  },
  {
    to: "/lazyLoad/",
    path: "/lazyLoad/*",
    name: "Lazy Layout",
    Component: LazyLayout,
  },
];
