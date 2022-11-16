// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import Panel from "../generic/Panel";

const Tabata = (props) => {
  const workTime = props.workTime;
  const restTime = props.restTime;
  const endTime = 0;
  const totalRounds = props.rounds;
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(workTime);
  const [currentRound, setCurrentRound] = useState(0);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isStarted && isPaused === false && time !== endTime) { // Timer is active
        interval = setInterval(() => {
          setTime((time) => time - 1000 );
      }, 1000);
    } else if (time === endTime && (currentRound <= totalRounds) && isResting === false) { // Rounds are active Working ended switch to resting period
      setIsResting(true);
      setTime(restTime);
    } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are active: Resting ended switch to working period
      setIsResting(false);
      setCurrentRound(currentRound + 1);
      setTime(workTime);
    } else {  // Timer and Rounds have completed
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time, currentRound, isResting, restTime, totalRounds, workTime, endTime]);

  const handleStart = () => {
    if (currentRound === totalRounds) {setCurrentRound(0)} // Reset rounds if previously run
    else if (currentRound === 0) {setCurrentRound(1)} // Start 1st round
    setTime(workTime);
    setIsStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    setTime(endTime);
    setCurrentRound(totalRounds);
    setIsStarted(false);
  };
  
  const handleReset = () => {
    setIsStarted(false);
    setIsResting(false);
    setCurrentRound(0);
    setTime(workTime);
  };

  return (
    <div className="tabata">
      <Panel time={time} displayType='tabata' currentRound={currentRound} totalRounds={totalRounds} isResting={isResting}/>
      <Buttons
        countDirection='down'
        time={time}
        endTime={endTime}
        isStarted={isStarted}
        isPaused={isPaused}
        isResting={isResting}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleFastForward={handleFastForward}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Tabata;