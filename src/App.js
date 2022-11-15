import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import WorkoutView from "./views/WorkoutView";
import AddTimerView from "./views/AddTimerView";
import AppProvider from './Context';

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const App = () => {
  return (
    <AppProvider>
      <Container>
        <Router basename="/assignment-2-cwelect1" >
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
