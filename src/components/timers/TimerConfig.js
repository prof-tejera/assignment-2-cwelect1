import React from "react";
import styled from "styled-components";
import Select from "../generic/Select";
import TimerView from "../../views/TimerView";
import { useState, useEffect } from "react";

const ColoredDiv = styled.div`
  background-color: ${props => props.inputColor || "rgb(27, 238, 16)"};
  margin: 5px;
`;

const ClearDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  gap: 10px;
`;

/* Generisize this component
  Exposwe things to configure
    Background color
    Height 
    Width
    ???
*/

const TimerConfig = (props) => {
  const [reset, setReset] = useState(false);
  const [rounds, setRounds] = useState(1);
  const [workTime, setWorkTime] = useState(5);
  const [restTime, setRestTime] = useState(5);

  const resetDefaults = (reset) => {
    console.log('Reset: ' + reset);
    return reset ? true : false;
  }

  useEffect(() => {
    // Reset dropdown if timer type changes
    if (reset === true) {
      setRounds(1);
      setWorkTime(5);
      setRestTime(5);
      setReset(false)
    }
  }, []);
  
  const handleOnChangeRounds = (e) => {
    setRounds(e.target.value);
  };

  const handleOnChangeWorkTime = (e) => {
    setWorkTime(e.target.value);
  };

  const handleOnChangeRestTime = (e) => {
    setRestTime(e.target.value);
  };

  if (props.type === 'Tabata') {
    setReset(true);
    return(
      <ClearDiv className="timer">
        <ColumnDiv>
        <RowDiv>
          <label>Rounds</label>
          <Select margin-left='10px' value={rounds} onChange={handleOnChangeRounds} width="50%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
        </RowDiv>
        <RowDiv>
          <label>Work Time (Seconds)</label>
            <Select value={workTime} onChange={handleOnChangeWorkTime} width="50%" name="workTime" dd_items={[5, 10, 15, 30, 45, 60]}></Select>
        </RowDiv>
        <RowDiv>
          <label>Rest Time (Seconds)</label>
            <Select value={restTime} onChange={handleOnChangeRestTime} width="50%" name="restTime" dd_items={[5, 10, 15, 30, 45, 60]}></Select>
        </RowDiv>
        </ColumnDiv>
        <div>
          <TimerView type={props.type} workTime={workTime} restTime={restTime} rounds={rounds} />
        </div>
      </ClearDiv>
    );
  } else if (props.type === 'XY') {
    return(
      <ClearDiv className="timer">
        <div>
          <Select value={rounds} onChange={handleOnChangeRounds} width="50%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Select>
        </div>
        <div>
          <TimerView type={props.type}/>
        </div>
      </ClearDiv>
    );
  } else if (props.type === 'Countdown') {
    return(
      <ClearDiv className="timer">
        <div>
          <Select value={rounds} onChange={handleOnChangeRounds} width="50%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Select>
        </div>
        <div>
          <TimerView type={props.type}/>
        </div>
      </ClearDiv>
    );
  } else if (props.type === 'Stopwatch') {
    return(
      <ClearDiv className="timer">
        <div>
          <Select value={rounds} onChange={handleOnChangeRounds} width="50%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Select>
        </div>
        <div>
          <TimerView type={props.type}/>
        </div>
      </ClearDiv>
    );
  }
};

export default TimerConfig;