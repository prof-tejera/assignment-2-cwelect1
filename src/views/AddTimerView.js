import React from "react";
import styled from "styled-components";
import Menu from "../components/generic/Menu";
import Select from "../components/generic/Select";
import TimerConfig from "../components/timers/TimerConfig";
import { useState } from "react";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const Section = styled.section`
  width: 90%;
  height: 10rem;
  display: grid;
  padding: 20px;
  align-items: center;
`;

const menu_items = [
  { displayText: "Workout", href: "/", isActive: false },
  { displayText: "Add Timer", href: "/add", isActive: true },
  { displayText: "Docs", href: "/docs", isActive: false  },
];

const AddTimerView = () => {
  const [timerType, setTimerType] = useState('Stopwatch');

  const handleOnChange = (type) => {
    setTimerType(type.target.value);
  };

  return (
    <Container>
      <Menu menu_items={menu_items}/>
      <Section>
        <Select 
          value={timerType}
          name='timer-type'
          width='35%'
          onChange={handleOnChange} 
          dd_items={['Add Timer', 'Stopwatch', 'Countdown', 'XY', 'Tabata']}
        />
        <TimerConfig type={timerType}/>
      </Section>
    </Container>
  )
}

export default AddTimerView;