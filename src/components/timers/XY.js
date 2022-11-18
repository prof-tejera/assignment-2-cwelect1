// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { AppContext } from "../../Context";
import { useInterval } from '../../hooks';
import Panel from "../generic/Panel";

const XY = (props) => {
  const startTime = props.startTime;
  const endTime = 0;
  let totalRounds = props.rounds;
  const [time, setTime] = useState(startTime);
  const [currentRound, setCurrentRound] = useState(1);

  const {paused, activeIndex, setActiveIndex} = useContext(AppContext);
  const active = activeIndex === props.index;

  useInterval(() => {
    if (paused || !active) return;

    if (time !== endTime) {
      setTime(c => c - 1000);
    } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are still active
      setCurrentRound(currentRound + 1);
      setTime(startTime);
    } else {
      setActiveIndex(props.index + 1);
    }
  }, 1000);
  
  return (
    <div className="xy">
      <Panel time={time} displayType='xy' currentRound={currentRound}/>
    </div>
  );
};

export default XY;