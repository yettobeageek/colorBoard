import React, { useState, useId } from "react";
import { COLORS } from "../Colors";
import Circles from "./Circles";
import Controls from "./Controls";

export default function Board() {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS?.length);
    return COLORS[randomIndex];
  };
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  const generateIds = useId();

  const handleClick = (e) => {
    setCircles((prev) => [
      ...prev,
      {
        x: e.clientX,
        y: e.clientY,
        id: generateIds,
        bgColor: getRandomColor(),
      },
    ]);
  };

  const handleUndo = () => {
    const copyCircles = [...circles];
    const lastCircle = copyCircles?.pop();
    setHistory((prev) => [...prev, lastCircle]);
    setCircles(copyCircles);
  };

  const handleRedo = () => {
    const copyHistory = [...history];
    const lastHistory = copyHistory?.pop();
    setCircles((prev) => [...prev, lastHistory]);
    setHistory(copyHistory);
  };
  const handleReset = () => {
    setCircles([]);
    setHistory([]);
  };

  return (
    <div className="board" onClick={handleClick}>
      <Circles circles={circles} />
      <Controls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        hasCircles={circles.length <= 0 ? true : false}
        hasHistory={history.length <= 0 ? true : false}
      />
    </div>
  );
}
