import react, { useEffect, useState } from "react";

const Timer = ({ isRunning, setIsRunning }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  return (
    <div className="timer_container">
      <h1>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>{" "}
    </div>
  );
};
export default Timer;
