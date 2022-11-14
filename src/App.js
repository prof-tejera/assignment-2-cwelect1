import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddTimerView from "./views/AddTimerView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/add" element={<AddTimerView />} />
          <Route path="/docs" element={<DocumentationView />} />
          <Route path="/assignment-2-cwelect1/" element={<TimersView />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;