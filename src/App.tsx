import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MusicLinks from "./components/music-links";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <MusicLinks />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
