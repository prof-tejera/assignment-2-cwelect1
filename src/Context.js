import React, { useEffect, useRef, useState } from 'react';

export const AppContext = React.createContext({});

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};

const AppProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [time, setTime] = useState(0);
  const [totalWorkoutTime, setTotalWorkoutTime] = useState(0);
  const [paused, setPaused] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const TIMER_TYPES = {
    STOPWATCH: 'Stopwatch',
    COUNTDOWN: 'Countdown',
    XY: 'XY',
    TABATA: 'Tabata',
  }

  useInterval(() => {
    if (paused) return;
    setTime(t => t + 1);
  }, 1000);

  return (
    <AppContext.Provider
      value={{
        TIMER_TYPES,
        activeIndex,
        setActiveIndex,
        time,
        totalWorkoutTime,
        setTotalWorkoutTime: (time) => setTotalWorkoutTime(time),
        paused,
        setPaused,
        reset: () => setActiveIndex(0),
        addItem: (item) => {setQueue(q => [...q, item]) },
        queue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
