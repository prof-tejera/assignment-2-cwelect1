import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import WorkoutView from "./views/WorkoutView";
import AddTimerView from "./views/AddTimerView";
import AppProvider from './Context';
import Menu from "./components/generic/Menu";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

// Move to Menu.js - Not tracking active page for now. No need to hve this here
const menu_items = [
  { displayText: "Workout", href: "/", isActive: false },
  { displayText: "Add Timer", href: "/add", isActive: false },
  { displayText: "Docs", href: "/docs", isActive: false  },
];

const App = () => {
  return (
    <AppProvider>
      <Container>
        <Router basename="/assignment-2-cwelect1" >
          <Menu menu_items={menu_items}/>
          <Routes>
            <Route path="/add" element={<AddTimerView />} />
            <Route path="/docs" element={<DocumentationView />} />
            <Route path="/" element={<WorkoutView />} />
          </Routes>
        </Router>
      </Container>
    </AppProvider>
  );
};

export default App;
