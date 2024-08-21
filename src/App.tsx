import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes/public";
import { authRoutes } from "@/routes/auth";
import { userRoutes } from "@/routes/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">{publicRoutes}</Route>
        <Route path="/auth">{authRoutes}</Route>
        <Route path="/">{userRoutes}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
