// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState } from "react";
import { useContext } from 'react';
import { AppContext } from "../../Context";
import { useInterval } from '../../hooks';
import Panel from "../generic/Panel";

const Countdown = (props) => {
  const startTime = props.startTime;
  const endTime = 0;
  const [time, setTime] = useState(startTime);

  const {paused, activeIndex, setActiveIndex} = useContext(AppContext);
  const active = activeIndex === props.index;

  useInterval(() => {
    console.log("entered useinterval")
    if (paused || !active) return;

    if (time === endTime) {
      setActiveIndex(props.index + 1);
    } else {
      setTime(c => c - 1000);
    }
  }, 1000);

  return (
    <div className="countdown">
      <Panel endTime={endTime} time={time}/>
    </div>
  );
};

export default Countdown;