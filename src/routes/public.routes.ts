import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const public_pages = {
  "/": Homepage,
};

export default public_pages;
