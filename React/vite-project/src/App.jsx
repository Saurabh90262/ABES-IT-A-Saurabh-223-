import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usestate from "../Components/Usestate";
import Count1 from "../Components/Count1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Count1 />
    </div>
  );
}

export default App;
