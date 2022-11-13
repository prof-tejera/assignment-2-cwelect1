import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 1.5rem;
  height: 2rem;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DisplayRounds = (props) => {
  const rounds = <div>Round: {props.currentRound}</div>;
  const tabataRounds = <div>Round: {props.currentRound} <span className={props.isResting ? 'tabata-rest':'tabata-work'}>{props.isResting ? 'REST':'WORK'}</span></div>;
  
  if (props.displayType === 'xy' ) {
    return(
      <StyledDiv className="display-xy-rounds">
        {rounds}
      </StyledDiv>
    );
  } else if (props.displayType === 'tabata') {
    return(
      <StyledDiv className="display-tabata-round">
        {tabataRounds}
      </StyledDiv>
    );
  }
};

export default DisplayRounds;