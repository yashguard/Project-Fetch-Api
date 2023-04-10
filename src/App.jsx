import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";

function App() {
  const setPrev = () => {
    setNum(num === 4 ? 4 : num-1)
  }

  const setNext = () => {
    setNum(num+1)
  }
  let [num,setNum] = useState(4)
  let [state, setState] = useState([]);
  useEffect(() => {
    apiFetch();
  }, [num]);

  const apiFetch = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=${num}`);
    let res = await req.json();
    setState(res.products);
  };
  return (
    <div>
      <Cart api={state} setNext={setNext} setPrev={setPrev}/>
    </div>
  );
}

export default App;
