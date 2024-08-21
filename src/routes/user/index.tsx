import { Route } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";

export const userRoutes = [
  <Route index element={<Home />} />,
  <Route path="/about" element={<About />} />,
];
