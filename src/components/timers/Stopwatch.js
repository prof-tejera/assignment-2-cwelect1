// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState } from "react";
import Panel from "../generic/Panel";
import { useContext } from 'react';
import { AppContext } from "../../Context";
import { useInterval } from '../../hooks';

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);
  //const [runStatus, setRunStatus] = useState('notStarted');
  const endTime = props.maxTime;

  const {paused, activeIndex, setActiveIndex} = useContext(AppContext);
  const active = activeIndex === props.index;

  useInterval(() => {
    if (paused || !active) return;

    
    if (time === endTime) {
      setActiveIndex(props.index + 1);
      //setRunStatus('completed')
    } else {
      setTime(c => c + 1000);
      //setRunStatus('running');
    }
  }, 1000);
  
  return (
    <div className="stop-watch">
      <Panel time={time}/>
    </div>
  );
};

export default Stopwatch;