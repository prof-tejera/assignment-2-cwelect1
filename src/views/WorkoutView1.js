import { useContext, useState } from 'react';
import { useInterval } from '../hooks';
import { AppContext } from './Context';

const Timer = ({ duration, index }) => {
  const { activeIndex, paused, setActiveIndex } = useContext(AppContext);
  const [time, setTime] = useState(0);
  const active = activeIndex === index;

  /*
  useInterval(() => {
    if (paused || !active) return;

    if (time === duration) {
      setActiveIndex(index + 1);
    } else {
      setTime(c => c + 1);
    }
  }, 1000);

  if () {

  } else if () {

  } else {
    return (
      <div
        style={{
          backgroundColor: active ? 'red' : 'white',
        }}
      >
        Timer - Duration: {duration} - {active && <span>Progress: {time}</span>}
      </div>
    );
  }*/

  useInterval(() => {
    // Pause
    if (paused || !active) return;

    // End for current timer reached
    if (time === duration) {
      setActiveIndex(index + 1);
    } else {
    // Timer not complete - Increment Time 
      setTime(c => c + 1);
    }
  }, 1000);

  // Stopwatch
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

  // Countdown
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
  // XY
  if (isStarted && isPaused === false && time !== endTime) { // Timer is active
      interval = setInterval(() => {
        setTime((time) => time - 1000 );
    }, 1000);
  } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are still active
    setCurrentRound(currentRound + 1);
    setTime(startTime);
  } else {  // Timer and Rounds have completed
    clearInterval(interval);
  }
  return () => {
    clearInterval(interval);
  };
  
  // Tabata
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

};

/*
TASKS:

1. Add duration to timer properties
2. Delete timer from queue - does this remove it from the dom?
*/

export default Timer;