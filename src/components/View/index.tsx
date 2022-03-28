import * as React from "react";
import styled from "styled-components";

export interface IViewProps {}

const View: React.FunctionComponent<IViewProps> = (props) => {
  return <StyledView></StyledView>;
};

export const StyledView = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 170px;
  height: 40px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0 8px;
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }
`;

export default View;
