// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState, useEffect } from "react";
import Button from "../generic/Buttons";
import properties from "../../properties.json";
import Panel from "../generic/Panel";

const Stopwatch = () => {
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const endTime = properties.timers[0].end;
  
  useEffect(() => {
    let interval = null;
  
    if (isStarted && isPaused === false && time !== endTime) {
      interval = setInterval(() => {
        setTime((time) => time + 10 );
      }, 10);
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
      <Button
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