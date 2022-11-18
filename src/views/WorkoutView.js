import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from 'react';
import { AppContext } from "../Context";
import TimerView from "../views/TimerView";
import calculateTotalWorkoutTime from "../utils/helpers";
import { useInterval } from '../hooks';

const Container = styled.section`
  width: 100%;
  height: 1fr;

  display: grid;
  grid-template-columns: .33fr .34fr .33fr;
  grid-template-areas:
    "Sidebar Body Sidebar"
    "Sidebar Body Sidebar"
`;

const SideBar = styled.div`
`;

const Body = styled.div`
  justify-items: center;
`;

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

const WorkoutView = () => {
  const {activeIndex, paused, setPaused, reset, setActiveIndex, queue, totalWorkoutTime, setTotalWorkoutTime, TIMER_TYPES} = useContext(AppContext);
  const duration = 5, index = 0;

  const [time, setTime] = useState(0);
  const active = activeIndex === index;

  useEffect(() => {
    setTotalWorkoutTime(calculateTotalWorkoutTime(queue));
  }, [queue, setTotalWorkoutTime]);

  /*useInterval(() => {
   // console.log("time: " + time + " durations: " + duration + " paused: " + paused)
    if (paused || !active) return;

    if (time === duration) {
      //setActiveIndex(index + 1);
    } else {
      setTime(c => c + 1);
      //console.log("time: " + time)
    }
  }, 1000);*/

  const displayTotalWorkoutTime = () => {
    const hours = ("" + Math.floor((totalWorkoutTime / 3600) % 360)).slice(-2);
    let hour_or_hours = (hours > 1 || hours < 1) ? "hours" : "hour";
    const minutes = (" " + Math.floor((totalWorkoutTime / 60) % 60)).slice(-2) + " min ";
    const seconds = (" 0" + Math.floor((totalWorkoutTime / 1) % 60)).slice(-2) + " sec";
    
    return (hours + " " + hour_or_hours + " " + minutes + seconds);
  }

  return (
    <Container>
      <SideBar/>
      <Body>
        <ColumnDiv>
          <Timers>
          <div>Total Workout Time: {displayTotalWorkoutTime()}</div>
          <button
            onClick={() => {
              setPaused(!paused);
            }}
          >
            {paused ? 'Run' : 'Pause'}
          </button>
          <button onClick={reset}>Reset</button>
          {/*<button onClick={setPaused(!paused)}>Start Workout</button>
          <button
            onClick={() => {
              removeItem(0);
            }}
          > Start Workout</button>*/}
            {queue.map((t, i) => {
              const timerProps = {
                key: i,
                index: i,
                ...t
              };
              if (t.type === TIMER_TYPES.STOPWATCH) {
                return <TimerView {...timerProps} />;
              } else if (t.type === TIMER_TYPES.COUNTDOWN) {
                return <TimerView {...timerProps} />;
              } else if (t.type === TIMER_TYPES.XY) {
                return <TimerView {...timerProps} />;
              } else if (t.type === TIMER_TYPES.TABATA) {
                return <TimerView {...timerProps} />;
              } 
              return null;
            })}
          </Timers>
        </ColumnDiv>
      </Body>
      <SideBar/>
    </Container>
    )
};

export default WorkoutView;
