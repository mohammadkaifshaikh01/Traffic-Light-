import React, { useState, useEffect } from "react";
import "./index.css";

const TL = () => {
  const [clr, setClr] = useState("green");

  useEffect(() => {
    const int = setInterval(() => {
      switch (clr) {
        case "green":
          setClr("yellow");
          break;
        case "yellow":
          setClr("red");
          break;
        case "red":
          setClr("yellow");
          break;
        default:
          setClr("green");
      }
    }, getTime(clr));

    return () => clearInterval(int);
  }, [clr]);

  const getTime = (clr) => {
    switch (clr) {
      case "green":
        return 3000; // Green stays for 3 seconds
      case "yellow":
        return 2000; // Yellow stays for 2 seconds
      case "red":
        return 4000; // Red stays for 4 seconds
      default:
        return 3000;
    }
  };

  return (
    <div className="traffic-light">
      <div className={`light green ${clr === "green" ? "active" : ""}`}></div>
      <div className={`light yellow ${clr === "yellow" ? "active" : ""}`}></div>
      <div className={`light red ${clr === "red" ? "active" : ""}`}></div>
    </div>
  );
};

export default TL;
