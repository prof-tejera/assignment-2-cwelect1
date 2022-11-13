import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Loading from "../components/generic/Loading";
import Buttons from "../components/generic/Buttons";
import DisplayTime from "../components/generic/DisplayTime";
import DisplayRounds from "../components/generic/DisplayRounds";
import Menu from "../components/generic/Menu";

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
`;

const NotBlock = styled.div`
  display: inline;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const menu_items = [
  { displayText: "Workout", href: "/", isActive: false },
  { displayText: "Add Timer", href: "/add", isActive: true },
  { displayText: "Docs", href: "/docs", isActive: false  },
];

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
    <Menu menu_items={menu_items}/>
      <NotBlock>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Loading spinner "
          component={<Loading />}
          propDocs={[
            {
              prop: "size",
              description: "Changes the size of the loading spinner",
              type: "string",
              defaultValue: "medium",
            },
          ]}
        />
        <DocumentComponent
          title="Buttons "
          component={<Buttons />}
          propDocs={[
            {
              prop: "countDirection",
              description: "Direction that counter increments - 'up' or 'down'",
              type: "string",
              defaultValue: "none",
            },
            {
              prop: "time",
              description: "The current time in miilseconds",
              type: "integer",
              defaultValue: "none",
            },
            {
              prop: "endTime",
              description: "The time at which a counter stops counting (milliseconds",
              type: "integer",
              defaultValue: "none",
            },
            {
              prop: "isStarted",
              description: "Indicates whether a counter has been started or not.",
              type: "boolean",
              defaultValue: "none",
            },
            {
              prop: "isPaused",
              description: "Indicates whether a counter has been paused or not",
              type: "boolean",
              defaultValue: "none",
            },
            {
              prop: "handleStart",
              description: "Start the timer",
              type: "event hnadler",
              defaultValue: "none",
            },
            {
              prop: "handlePauseResume",
              description: "Pauses or resumes the timer",
              type: "event hnadler",
              defaultValue: "none",
            },
            {
              prop: "handleFastForward",
              description: "Ends the timer. Fast forwards to end of time and rounds(if applicable)",
              type: "event hnadler",
              defaultValue: "none",
            },
            {
              prop: "handleReset",
              description: "Resets the timer tooriginal values",
              type: "event hnadler",
              defaultValue: "none",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayRounds "
          component={<DisplayRounds displayType={'xy'} currentRound={1} isResting={false}/>}
          propDocs={[
            {
              prop: "currentRound",
              description: "The currently active round",
              type: "string",
              defaultValue: "none",
            },
            {
              prop: "isResting",
              description: "Related to Tabata counter. {true} = in resting period {false} = in working period",
              type: "boolean",
              defaultValue: "none",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime "
          component={<DisplayTime time={62000} isStarted={false}/>}
          propDocs={[
            {
              prop: "time",
              description: "The current time in miilseconds. Outputs mm:ss:milliseconds",
              type: "integer",
              defaultValue: "none",
            },
          ]}
        />
      </NotBlock>
    </Container>
  );
};

export default Documentation;
