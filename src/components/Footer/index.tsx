import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterTodo } from "../../redux/actions";
import { IState } from "../../store";
import { ITodoState } from "../TodoList";
import { StyledView } from "../View";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  //************Declaration***********
  const dispatch = useDispatch();
  //************Initial state*********

  //************Side effect**********

  //***********Get data from store*****************
  const todoList = useSelector<IState>((state) => state.todoList) as ITodoState;
  const { filter } = todoList;
  const countTodolistComplete = todoList.data.filter(
    (todo) => todo.isCompleted === true
  );
  const countTodoListPending = todoList.data.filter(
    (todo) => todo.isCompleted === false
  );
  const countTodoList = todoList.data.length;
  //***********Handle event**************
  const handleFilter = (filter: string): void => {
    dispatch(filterTodo(filter));
  };
  //***********Render UI*****************

  return (
    <StyledFooter>
      <ViewTotal active={filter === "all"} onClick={() => handleFilter("all")}>
        All : {countTodoList}
      </ViewTotal>
      <ViewCompleted
        active={filter === "completed"}
        onClick={() => handleFilter("completed")}
      >
        Completed : {countTodolistComplete.length}
      </ViewCompleted>
      <ViewPending
        active={filter === "pending"}
        onClick={() => handleFilter("pending")}
      >
        Pending : {countTodoListPending.length}
      </ViewPending>
    </StyledFooter>
  );
};
interface ViewProps {
  active: boolean;
}
const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  /* height: ${({ theme }) => theme.height.footer}; */
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    & > div {
      font-size: 1.4rem;
    }
  }
  & > div {
    cursor: pointer;
  }
`;
const ViewPending = styled(StyledView)<ViewProps>`
  border: ${({ active, theme }) =>
    active ? `4px solid ${theme.color.white}` : "none"};
  background: ${({ theme, active }) =>
    active ? theme.background.btnAllPending : "#95a5a6"};
`;
const ViewCompleted = styled(StyledView)<ViewProps>`
  border: ${({ active, theme }) =>
    active ? `4px solid ${theme.color.white}` : "none"};
  background: ${({ theme, active }) =>
    active ? theme.background.btnAllCompleted : "#95a5a6"};
`;
const ViewTotal = styled(StyledView)<ViewProps>`
  border: ${({ active, theme }) =>
    active ? `4px solid ${theme.color.white}` : "none"};
  background: ${({ theme, active }) =>
    active ? theme.background.btnRemoveAll : "#95a5a6"};
`;
export default Footer;
