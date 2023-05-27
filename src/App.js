import "./styles.css";
import { useState } from "react";
export default function App() {
  const [color, setcolor] = useState();
  const handlebgcolor = () => {
    const newcolor = Math.random().toString(16).substr(-6);
    console.log(newcolor);
    setcolor(newcolor);
  };
  return (
    <div className="App" style={{ backgroundColor: `#${color}` }}>
      <button onClick={handlebgcolor}>click to see some magic happen!</button>
    </div>
  );
}
