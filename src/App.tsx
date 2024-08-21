import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes/public";
import { authRoutes } from "@/routes/auth";
import taskId from "./pages/task/taskId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">{publicRoutes}</Route>
        <Route path="/auth">{authRoutes}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
