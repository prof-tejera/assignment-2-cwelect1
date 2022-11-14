// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import Panel from "../generic/Panel";

const Stopwatch = (props) => {
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const endTime = props.maxTime;
  
  useEffect(() => {
    let interval = null;
  
    if (isStarted === true && isPaused === false && time !== endTime) {
      interval = setInterval(() => {
        setTime((time) => time + 1000 );
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time, endTime]);

  const handleStart = () => {
    setTime(0);
    setisStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    setIsPaused(true);
    setTime(endTime);
  };
  
  const handleReset = () => {
    setisStarted(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Panel time={time}/>
      <Buttons
        countDirection='up'
        time={time}
        endTime={endTime}
        isStarted={isStarted}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleFastForward={handleFastForward}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Stopwatch;