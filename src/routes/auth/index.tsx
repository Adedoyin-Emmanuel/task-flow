import { Route } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

export const authRoutes = [
  <Route path="login" element={<Login />} key={"login"} />,
  <Route path="signup" element={<Signup />} key={"signup"} />,
];
