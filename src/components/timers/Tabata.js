// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { AppContext } from "../../Context";
import { useInterval } from '../../hooks';
import Panel from "../generic/Panel";

const Tabata = (props) => {
  const workTime = props.workTime;
  const restTime = props.restTime;
  const endTime = 0;
  const totalRounds = props.rounds;
  const [time, setTime] = useState(workTime);
  const [currentRound, setCurrentRound] = useState(1);
  const [isResting, setIsResting] = useState(false);

  const {paused, activeIndex, setActiveIndex} = useContext(AppContext);
  const active = activeIndex === props.index;

  useInterval(() => {
    if (paused || !active) return;

    if (time !== endTime) {
      setTime(c => c - 1000);
    } else if (time === endTime && (currentRound <= totalRounds) && isResting === false) { // Rounds are active Working ended switch to resting period
      setIsResting(true);
      setTime(restTime);
    } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are active: Resting ended switch to working period
      setIsResting(false);
      setCurrentRound(currentRound + 1);
      setTime(workTime);
    } else {
      setActiveIndex(props.index + 1);
    }
  }, 1000);
/*
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
*/
  return (
    <div className="tabata">
      <Panel time={time} displayType='tabata' currentRound={currentRound} totalRounds={totalRounds} isResting={isResting}/>
    </div>
  );
};

export default Tabata;