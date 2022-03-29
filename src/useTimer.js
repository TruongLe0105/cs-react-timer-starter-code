import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = false;
  const active = useRef();
  const refInterval = useRef();
  const startTimer = () => {
    if (!isStart) {
      refInterval.current = setInterval(() => { setTime((time) => time + 1) }, 1000);
    }
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current)
  };
  const resetTimer = () => {
    setTime(0)
    clearInterval(refInterval.current)
    active.current.disabled = false;
  };


  return { time, startTimer, stopTimer, resetTimer, active, refInterval, };
};
export default useTimer;
