function Circle({ x, y, bgColor }) {
  return (
    <div
      className="circle"
      style={{ backgroundColor: bgColor, top: `${y}px`, left: `${x}px` }}
    ></div>
  );
}

export default function Circles({ circles }) {
  return circles.map((circle, ind) => {
    return <Circle key={ind} {...circle} />;
  });
}
