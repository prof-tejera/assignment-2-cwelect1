import React, { useEffect } from "react";
import styled from "styled-components";
import { useContext } from 'react';
import { AppContext } from "../Context";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import calculateTotalWorkoutTime from "../utils/helpers";

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
  const {paused, setPaused, queue, totalWorkoutTime, setTotalWorkoutTime, TIMER_TYPES} = useContext(AppContext);

  useEffect(() => {
    setTotalWorkoutTime(calculateTotalWorkoutTime(queue));
  }, [queue, setTotalWorkoutTime]);

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
          </Timers>
        </ColumnDiv>
      </Body>
      <SideBar/>
    </Container>
    )
};

export default WorkoutView;
