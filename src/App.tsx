import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-4xl">Hello world!</h2>
    </>
  );
}

export default App;
