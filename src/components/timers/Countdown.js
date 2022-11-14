// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import Panel from "../generic/Panel";

const Countdown = (props) => {
  const startTime = props.startTime;
  const endTime = props.end || 0;
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    let interval = null;
    if (isStarted && isPaused === false && time !== endTime) {
      interval = setInterval(() => {
        setTime((time) => time - 1000 );
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time, endTime]);

  const handleStart = () => {
    setTime(startTime);
    setisStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    setTime(endTime);
    setisStarted(false);
  };
  
  const handleReset = () => {
    setisStarted(false);
    setTime(startTime);
  };

  return (
    <div className="countdown">
      <Panel endTime={endTime} time={time}/>
      <Buttons
        countDirection='down'
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

export default Countdown;