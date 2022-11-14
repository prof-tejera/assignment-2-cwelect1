import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: ${props => props.width || 'auto'};
  height: 1.25rem;
  margin-left: ${props => props.marginLeft || null};
`;

/* Add features that are being duplicated in parent controls, like:
  - Add a Label
  - layout (label on left or top?)
  - alignment and size (to make it match other selects)
  - size of label and select
*/

const Select = (props) => {
  //console.log('Select.value: ' + props.value)
  return (
    <StyledSelect 
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      width={props.width}>
      {props.dd_items.map((item) => (
        <option key={item} value={item}>{item}</option>
        )
      )}
    </StyledSelect>
  )
};

export default Select;