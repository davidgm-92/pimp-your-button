"use client";

import { useEffect, useState } from "react";

const PaddingSlider = ({ property, setProp }) => {
  const [value, setValue] = useState(0);

  const sizeX = {
    0: "px-0",
    1: "px-1",
    2: "px-2",
    3: "px-3",
    4: "px-4",
    5: "px-5",
    6: "px-6",
    7: "px-7",
    8: "px-8",
    9: "px-9",
    10: "px-10",
  };
  const sizeY = {
    0: "py-0",
    1: "py-1",
    2: "py-2",
    3: "py-3",
    4: "py-4",
    5: "py-5",
    6: "py-6",
    7: "py-7",
    8: "py-8",
    9: "py-9",
    10: "py-10",
  };

  useEffect(() => {
    setProp((prev) => ({
      ...prev,
      [property]: property === "paddingX" ? sizeX[value] : sizeY[value],
    }));
  }, [value]);

  return (
    <div className="flex gap-2">
      <p>{property.text}</p>
      <input
        type="range"
        min={0}
        max={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value}
    </div>
  );
};

export default PaddingSlider;
