import React from "react";
import styled from "styled-components";
import Select from "../generic/Select";
import TimerView from "../../views/TimerView";
import { useState } from "react";

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

const TimerConfig = (props) => {

  const Stopwatch = () => {
    const [maxTime, setMaxTime] = useState(60)  
    
    const handleOnChangeMaxTime = (e) => {
      setMaxTime(e.target.value);
    };

    return(
      <ClearDiv className="timer">
        <RowDiv>
          <label>Start Time (Seconds)</label>
          <Select value={maxTime} onChange={handleOnChangeMaxTime} width="50%" name="rounds" dd_items={[5, 10, 15, 20, 25, 30, 60, 90]}></Select>
        </RowDiv>
        <div>
          <TimerView type={props.type} maxTime={maxTime}/>
        </div>
      </ClearDiv>
    );
  }

  const Countdown = () => {
    const [startTime, setStartTime] = useState(5)

    const handleOnChangeStartTime = (e) => {
      setStartTime(e.target.value);
    };
  
    return(
      <ClearDiv className="timer">
        <RowDiv>
          <label>Start Time (Seconds)</label>
          <Select value={startTime} onChange={handleOnChangeStartTime} width="50%" name="rounds" dd_items={[5, 10, 15, 20, 25, 30, 60, 90]}></Select>
        </RowDiv>
        <div>
          <TimerView type={props.type} startTime={startTime}/>
        </div>
      </ClearDiv>
    );
  }

  const XY = () => {
    const [rounds, setRounds] = useState(1);
    const [startTime, setStartTime] = useState(5);

    const handleOnChangeRounds = (e) => {
      setRounds(e.target.value);
    };
    
    const handleOnChangeStartTime = (e) => {
      setStartTime(e.target.value);
    };
  
    return(
      <ClearDiv className="timer">
        <ColumnDiv>
          <RowDiv>
            <label>Rounds</label>
            <Select value={rounds} onChange={handleOnChangeRounds} width="25%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Select>
            <label>Start Time (Seconds)</label>
            <Select value={startTime} onChange={handleOnChangeStartTime} width="25%" name="workTime" dd_items={[5, 10, 15, 30, 45, 60, 90]}></Select>
          </RowDiv>
        </ColumnDiv>
        <div>
          <TimerView type={props.type} rounds={rounds} startTime={startTime}/>
        </div>
      </ClearDiv>
    );
  }

  const Tabata = () => {
    const [rounds, setRounds] = useState(1);
    const [workTime, setWorkTime] = useState(5);
    const [restTime, setRestTime] = useState(5);

    const handleOnChangeRounds = (e) => {
      setRounds(e.target.value);
    };
    
    const handleOnChangeWorkTime = (e) => {
      setWorkTime(e.target.value);
    };
  
    const handleOnChangeRestTime = (e) => {
      setRestTime(e.target.value);
    };
  
    return(
      <ClearDiv className="timer">
        <ColumnDiv>
        <RowDiv>
          <label>Rounds</label>
          <Select margin-left='10px' value={rounds} onChange={handleOnChangeRounds} width="50%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
        </RowDiv>
        <RowDiv>
          <label>Work Time (Seconds)</label>
          <Select value={workTime} onChange={handleOnChangeWorkTime} width="50%" name="workTime" dd_items={[5, 10, 15, 30, 45, 60, 90]}></Select>
        </RowDiv>
        <RowDiv>
          <label>Rest Time (Seconds)</label>
            <Select value={restTime} onChange={handleOnChangeRestTime} width="50%" name="restTime" dd_items={[5, 10, 15, 30, 45, 60, 90]}></Select>
        </RowDiv>
        </ColumnDiv>
        <div>
          <TimerView type={props.type} workTime={workTime} restTime={restTime} rounds={rounds} />
        </div>
      </ClearDiv>
    );
  }

  if (props.type === 'Stopwatch') {
    return <Stopwatch/>
  } else if (props.type === 'Countdown') {
    return <Countdown/>
  } else if (props.type === 'XY') {
    return <XY/>
  } else if (props.type === 'Tabata') {
    return <Tabata/>
  }

};

export default TimerConfig;