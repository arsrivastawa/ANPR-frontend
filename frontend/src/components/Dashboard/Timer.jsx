import React, { useState } from "react";

function Timer() {
  const [time, setTime] = useState(true);

  setTimeout(() => setTime(!time), 1000);

  let date = new Date();
  return (
    <div>
      <span>
        {Number(date.getDate()).toString()}/
        {Number(date.getMonth() + 1).toString()}/
        {Number(date.getFullYear()).toString()}{" "}
      </span>
      {Number(date.getHours().toString()) > 12
        ? date.getHours().toString() - 12
        : date.getHours().toString()}
      :{date.getMinutes().toString()}:{date.getSeconds().toString()}
    </div>
  );
}
export default Timer;
