"use client";

import { useEffect, useState } from "react";
import PaddingSlider from "./PaddingSlider";

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
    <div className="flex gap-2 mt-10 items-center justify-evenly">
      <div>
        <div className="flex gap-2">
          <p>Padding X</p>
          <PaddingSlider property={"paddingX"} setProp={setButtonClasses} />
        </div>
        <div className="flex gap-2">
          <p>Padding Y</p>
          <PaddingSlider property={"paddingY"} setProp={setButtonClasses} />
        </div>
      </div>
      <button type="button" className={classesString}>
        Press me
      </button>
    </div>
  );
};

export default ButtonPimp;
