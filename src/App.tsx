import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes/public";
import { authRoutes } from "@/routes/auth";
import { userRoutes } from "@/routes/user";
import { adminRoutes } from "@/routes/admin";
import { projectManagerRoutes } from "./routes/manager";
import Unauthorized from "./pages/unauthorized";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/">{publicRoutes}</Route>
          <Route path="/auth">{authRoutes}</Route>
          <Route path="/">{userRoutes}</Route>
          <Route path="/admin">{adminRoutes}</Route>
          <Route path="/manager">{projectManagerRoutes}</Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
