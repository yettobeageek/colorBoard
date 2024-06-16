import React from "react";

const Controls = ({ onUndo, onRedo, onReset, hasCircles, hasHistory }) => {
  return (
    <div className="controls" onClick={(e) => e.stopPropagation()}>
      <button
        style={{ backgroundColor: hasCircles ? "grey" : "green" }}
        disabled={hasCircles}
        onClick={onUndo}
      >
        Undo
      </button>
      <button
        style={{ backgroundColor: hasHistory ? "grey" : "green" }}
        disabled={hasHistory}
        onClick={onRedo}
      >
        Redo
      </button>
      <button
        style={{ backgroundColor: hasCircles || hasCircles ? "grey" : "green" }}
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
