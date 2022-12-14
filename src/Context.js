import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [displayTimer, setDisplayTimer] = useState(true);
  const [totalWorkoutTime, setTotalWorkoutTime] = useState(0);
  const [paused, setPaused] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const TIMER_TYPES = {
    STOPWATCH: 'Stopwatch',
    COUNTDOWN: 'Countdown',
    XY: 'XY',
    TABATA: 'Tabata',
  }

  return (
    <AppContext.Provider
      value={{
        displayTimer,
        setDisplayTimer,
        TIMER_TYPES,
        activeIndex,
        setActiveIndex,
        totalWorkoutTime,
        setTotalWorkoutTime: (time) => setTotalWorkoutTime(time),
        paused,
        setPaused,
        reset: () => setActiveIndex(0),
        addItem: (item) => {setQueue(q => [...q, item]) },
        removeItem: (item) => {setQueue(q => q.filter((_, index) => index !==item))},
        queue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;