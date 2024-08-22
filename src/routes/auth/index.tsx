import { Route } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Logout from "@/pages/logout";
import AuthRoute from "@/components/auth-route";

export const authRoutes = [
  <Route
    path="login"
    element={
      <AuthRoute>
        <Login />
      </AuthRoute>
    }
    key={"login"}
  />,
  <Route
    path="signup"
    element={
      <AuthRoute>
        <Signup />
      </AuthRoute>
    }
    key={"signup"}
  />,
  <Route path="logout" element={<Logout />} key={"logout"} />,
];
