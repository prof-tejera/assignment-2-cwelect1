import React from "react";
import styled from "styled-components";
import Menu from "../components/generic/Menu";
import { useContext } from 'react';
import { AppContext } from "../Context";
import TimerView from "../views/TimerView";

/*
const xContainer = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;
*/

const Container = styled.section`
  width: 1366px;
  height: 768px;

  display: grid;
  grid:
    "sidebar body" 1fr
    / 100px 1fr;
  gap: 8px;
`;

const SideBar = styled.div`
  grid-area: sidebar;
`;

const Body = styled.div`
  grid-area: body;
`;

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const menu_items = [
  { displayText: "Workout", href: "/", isActive: true },
  { displayText: "Add Timer", href: "/add", isActive: false },
  { displayText: "Docs", href: "/docs", isActive: false  },
];

const WorkoutView = () => {
  const {activeIndex, setActiveIndex, addItem, queue, TIMER_TYPES} = useContext(AppContext);

  const handleOnAdd = () => {
    setActiveIndex(activeIndex + 1);
    addItem(
      {
        type: 'Stopwatch',
        maxTime: '5'
      },
    );
    buildTimerTree();
  }

  const handleOnReset = () => {

  }

  const buildTimerTree = () => {
    {queue.map((t, i) => {

      if (t.type === TIMER_TYPES.STOPWATCH) {
        return <TimerView {...t} />;
      } else if (t.type === TIMER_TYPES.COUNTDOWN) {
        return <TimerView type={t.type} />;
      } else if (t.type === TIMER_TYPES.XY) {
        return <TimerView type={t.type} />;
      } else if (t.type === TIMER_TYPES.TABATA) {
        return <TimerView type={t.type} />;
      }

      return null;
    })}
  }

  return (
    <Container>
      <Menu menu_items={menu_items}/>
      <SideBar>Sidebar</SideBar>
      <Body>Body
        <div>ActiveIndex: {activeIndex}</div>
        <button onClick={handleOnAdd}>Add Timer</button>
        <button onClick={handleOnReset}>Reset</button>
        <Timers>
          {buildTimerTree}
        </Timers>
      </Body>
    </Container>
    )
};

export default WorkoutView;
