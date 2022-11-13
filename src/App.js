import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddTimerView from "./views/AddTimerView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const menu_items = [
  { displayText: "Workout", href: "/", isActive: true },
  { displayText: "Add Timer", href: "/add", isActive: false },
  { displayText: "Docs", href: "/docs", isActive: false  },
];

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/add" element={<AddTimerView />} />
          <Route path="/docs" element={<DocumentationView />} />
          <Route path="/" element={<TimersView />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
