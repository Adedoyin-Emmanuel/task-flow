import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes/public";

function App() {
  return (
    <BrowserRouter>
      <Routes>{publicRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
