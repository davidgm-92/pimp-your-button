"use client";

import { useEffect, useState } from "react";

const Slider = ({ property, setProp }) => {
  const [value, setValue] = useState(0);
  const [classString, setClassString] = "";

  useEffect(() => {
    const z = property.key;
    console.log(property.baseString);
    setProp((prev) => ({
      ...prev,
      z: property.baseString + value.toString,
    }));
  }, [value]);

  return (
    <div className="flex gap-2">
      <p>{property.text}</p>
      <input
        type="range"
        min={property.min}
        max={property.max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value}
    </div>
  );
};

export default Slider;
