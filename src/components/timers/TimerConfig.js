import React from "react";
import styled from "styled-components";
import Select from "../generic/Select";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import XY from "./XY";
import Tabata from "./Tabata";
import { useState } from "react";
import { useContext } from 'react';
import { AppContext } from "../../Context";

const ClearDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.25rem;
  margin: 3px;
  gap: 10px;
`;

const TimerConfig = (props) => {
  const {addItem, queue, TIMER_TYPES} = useContext(AppContext);

  const StopwatchConfig = () => {
    const [maxTime, setMaxTime] = useState(60)  
    
    const handleOnChangeMaxTime = (e) => {
      setMaxTime(e.target.value);
    };

    const handleAddTimer = () => {
      addItem({
        type: 'Stopwatch',
        maxTime: maxTime * 1000
      });
    }

    return(
      <ClearDiv className="timer">
        <ColumnDiv>
          <RowDiv>
            <label>Start Time (Seconds)</label>
            <Select value={maxTime} onChange={handleOnChangeMaxTime} width="50%" name="rounds" dd_items={[5, 10, 15, 20, 25, 30, 60, 90]}></Select>
            <button onClick={handleAddTimer}>Add Timer</button>
          </RowDiv>
        </ColumnDiv>
        <ColumnDiv>
            {queue.map((t, i) => {
              const timerProps = {
                key: i,
                index: i,
                ...t
              };
              if (t.type === TIMER_TYPES.STOPWATCH) {
                return <Stopwatch {...timerProps} />;
              } else if (t.type === TIMER_TYPES.COUNTDOWN) {
                return <Countdown {...timerProps} />;
              } else if (t.type === TIMER_TYPES.XY) {
                return <XY {...timerProps} />;
              } else if (t.type === TIMER_TYPES.TABATA) {
                return <Tabata {...timerProps} />;
              } 
              return null;
            })}
        </ColumnDiv>
      </ClearDiv>
    );
  }

  const CountdownConfig = () => {
    const [startTime, setStartTime] = useState(5)

    const handleOnChangeStartTime = (e) => {
      setStartTime(e.target.value);
    };

    const handleAddTimer = () => {
      addItem({
        type: 'Countdown',
        startTime: startTime * 1000
      });
    }

    return(
      <ClearDiv className="timer">
        <RowDiv>
          <label>Start Time (Seconds)</label>
          <Select value={startTime} onChange={handleOnChangeStartTime} width="50%" name="rounds" dd_items={[5, 10, 15, 20, 25, 30, 60, 90]}></Select>
          <button onClick={handleAddTimer}>Add Timer</button>
        </RowDiv>
        <ColumnDiv>
          {queue.map((t, i) => {
            const timerProps = {
              key: i,
              index: i,
              startTime: startTime,
              ...t
            };
            if (t.type === TIMER_TYPES.STOPWATCH) {
              return <Stopwatch {...timerProps} />;
            } else if (t.type === TIMER_TYPES.COUNTDOWN) {
              return <Countdown {...timerProps} />;
            } else if (t.type === TIMER_TYPES.XY) {
              return <XY {...timerProps} />;
            } else if (t.type === TIMER_TYPES.TABATA) {
              return <Tabata {...timerProps} />;
            } 
            return null;
          })}
        </ColumnDiv>
      </ClearDiv>
    );
  }

  const XYConfig = () => {
    const [rounds, setRounds] = useState(1);
    const [startTime, setStartTime] = useState(5);

    const handleOnChangeRounds = (e) => {
      setRounds(e.target.value);
    };
    
    const handleOnChangeStartTime = (e) => {
      setStartTime(e.target.value);
    };
  
    const handleAddTimer = () => {
      addItem({
        type: 'XY',
        rounds: rounds,
        startTime: startTime * 1000
      });
    }

    return(
      <ClearDiv className="timer">
        <ColumnDiv>
          <RowDiv>
            <label>Rounds</label>
            <Select value={rounds} onChange={handleOnChangeRounds} width="25%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Select>
            <label>Start Time (Seconds)</label>
            <Select value={startTime} onChange={handleOnChangeStartTime} width="25%" name="workTime" dd_items={[5, 10, 15, 30, 45, 60, 90]}></Select>
            <button onClick={handleAddTimer}>Add Timer</button>
          </RowDiv>
        </ColumnDiv>
        <ColumnDiv>
          {queue.map((t, i) => {
            const timerProps = {
              key: i,
              index: i,
              startTime: startTime,
              rounds: rounds,
              ...t
            };
            if (t.type === TIMER_TYPES.STOPWATCH) {
              return <Stopwatch {...timerProps} />;
            } else if (t.type === TIMER_TYPES.COUNTDOWN) {
              return <Countdown {...timerProps} />;
            } else if (t.type === TIMER_TYPES.XY) {
              return <XY {...timerProps} />;
            } else if (t.type === TIMER_TYPES.TABATA) {
              return <Tabata {...timerProps} />;
            } 
            return null;
          })}
        </ColumnDiv>
      </ClearDiv>
    );
  }

  const TabataConfig = () => {
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
  
    const handleAddTimer = () => {
      addItem({
        type: 'Tabata',
        rounds: rounds,
        workTime: workTime * 1000,
        restTime: restTime * 1000
      });
    }

    return(
      <ClearDiv className="timer">
        <ColumnDiv>
        <RowDiv>
          <label>Rounds</label>
          <Select margin-left='10px' value={rounds} onChange={handleOnChangeRounds} width="65%" name="rounds" dd_items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
          <button onClick={handleAddTimer}>Add Timer</button>
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
        <ColumnDiv>
          {queue.map((t, i) => {
            const timerProps = {
              key: i,
              index: i,
              workTime: workTime,
              restTime: restTime,
              rounds: rounds,
              ...t
            };
            if (t.type === TIMER_TYPES.STOPWATCH) {
              return <Stopwatch {...timerProps} />;
            } else if (t.type === TIMER_TYPES.COUNTDOWN) {
              return <Countdown {...timerProps} />;
            } else if (t.type === TIMER_TYPES.XY) {
              return <XY {...timerProps} />;
            } else if (t.type === TIMER_TYPES.TABATA) {
              return <Tabata {...timerProps} />;
            } 
            return null;
          })}
        </ColumnDiv>
      </ClearDiv>
    );
  }

  const Default = () => {
    return(
      <ClearDiv className="timer">
        Select a timer to configure.
      </ClearDiv>
    );
  }

  if (props.type === 'Stopwatch') {
    return <StopwatchConfig/>
  } else if (props.type === 'Countdown') {
    return <CountdownConfig/>
  } else if (props.type === 'XY') {
    return <XYConfig/>
  } else if (props.type === 'Tabata') {
    return <TabataConfig/>
  } else {
    return <Default />
  }

};

export default TimerConfig;