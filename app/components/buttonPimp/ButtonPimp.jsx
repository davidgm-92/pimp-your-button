"use client";

import { useEffect, useState } from "react";
import Slider from "./Slider";

const ButtonPimp = () => {
  const [buttonClasses, setButtonClasses] = useState({
    paddingX: "px-4",
    paddingY: "py-2",
    width: "w-fit",
    textColor: "text-[#000]",
    bgColor: "bg-[#eee]",
    textSize: "text-sm",
    border: "border",
    rounded: "rounded-xl",
  });
  const [classesString, setClassesString] = useState("");

  useEffect(() => {
    setClassesString("");
    Object.keys(buttonClasses).forEach(function (key) {
      setClassesString((prevValue) => prevValue + " " + buttonClasses[key]);
    });
  }, [buttonClasses]);

  return (
    <div className="flex flex-col gap-2 mt-10 items-center">
      <button className={classesString}>Press me</button>
      <p>{classesString}</p>
      <Slider
        property={{
          text: "Padding X axis",
          key: "paddingX",
          baseString: "px-",
          min: 0,
          max: 20,
        }}
        setProp={setButtonClasses}
      />
    </div>
  );
};

export default ButtonPimp;
