import { useState } from "react";
import Card from "./Card";
import Timer from "./Timer";

function Board() {
  const [isRunning, setIsRunning] = useState(false);

  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/circle.svg", stat: "" },
      { id: 1, img: "/img/circle.svg", stat: "" },
      { id: 2, img: "/img/triangle.svg", stat: "" },
      { id: 2, img: "/img/triangle.svg", stat: "" },
      { id: 3, img: "/img/square.svg", stat: "" },
      { id: 3, img: "/img/square.svg", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (!isRunning) setIsRunning(true);

    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    var end = true;
    for (let i = 0; i < items.length; i++) {
      if (items[i].stat !== "active") end = false;
    }

    if (end) setIsRunning(false);
  }

  return (
    <>
      <Timer isRunning={isRunning} setIsRunning={setIsRunning} />
      <div className="container" disabled>
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default Board;
