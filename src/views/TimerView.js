import React from "react";
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timer = styled.div`
  background-color: rgba(50, 150, 150, .5);
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
`;

const Title = styled.div`
  margin: .25rem;
  font-size: 1.5rem;
`;

const TimerView = (props) => {

  let title;
  let timer_type;

  if (props.type === 'Tabata') {
    title = props.type;
    timer_type = <Tabata index={props.index} workTime={props.workTime * 1000} restTime={props.restTime * 1000} rounds={props.rounds}/>;
  }
  else if (props.type === 'XY') {
    title = props.type;
    timer_type = <XY index={props.index} startTime={props.startTime * 1000} rounds={props.rounds}/>;
  }
  else if (props.type === 'Countdown') {
    title = props.type;
    timer_type = <Countdown index={props.index} startTime={props.startTime * 1000}/>;
  }
  else if (props.type === 'Stopwatch') {
    title = props.type;
    timer_type = <Stopwatch index={props.index} exludeButtons={props.exludeButtons} maxTime={props.maxTime * 1000}/>;
  }

  if (props.displayTimer === false){
    return null;
  } else {
    return (
      <div>
        <Timer id={'workout-timer-' + props.index} key={title}>
          <Title>{title}</Title>
          {timer_type}
        </Timer>
      </div>
    )
  }
};

export default TimerView;
