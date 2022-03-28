import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import todoSelector from "../../redux/selectors/todoSelector";
import { IData, IState } from "../../store";
import TodoItem from "../TodoItem";
//************Interface***********
interface ITodolistProps {}
export interface ITodo {
  id: string;
  name: string;
  isCompleted: boolean;
}
export interface ITodoState {
  data: ITodo[];
  sort: string;
  filter: string;
}

const Todolist: React.FunctionComponent<ITodolistProps> = (props) => {
  //************Declaration***********

  //************Initial state*********
  const [isInputUpdated, setIsInputUpdated] = React.useState<string>();
  //************Side effect***********

  //***********Get data from store*****************
  // const todoList = useSelector<IState>((state) => {
  //   // Sort value before return todoList
  //   if (state.todoList.sort === "sortCompleted") {
  //     const newData = [...state.todoList.data].sort(
  //       (a: IData, b: IData): number =>
  //         Number(b.isCompleted) - Number(a.isCompleted)
  //     );
  //     return { ...state.todoList, data: newData };
  //   }
  //   if (state.todoList.sort === "sortPending") {
  //     const newData = [...state.todoList.data].sort(
  //       (a: IData, b: IData): number =>
  //         Number(a.isCompleted) - Number(b.isCompleted)
  //     );
  //     return { ...state.todoList, data: newData };
  //   }
  //   return state.todoList;
  // }) as ITodoState;
  const todoList = useSelector(todoSelector);
  //***********Handle event**************
  const handleChooseInputUpdate = (id: string) => {
    setIsInputUpdated(id);
  };
  //***********Render UI*****************

  return (
    <StyledTodoList>
      {todoList.data.map((todo) => (
        <TodoItem
          key={todo.id}
          onChooseInputUpdate={handleChooseInputUpdate}
          todo={todo}
          isTodoItemUpdated={isInputUpdated === todo.id}
        />
      ))}
    </StyledTodoList>
  );
};

const StyledTodoList = styled.ul`
  display: block;
  height: calc(
    100% - ${({ theme }) => theme.height.header} -
      ${({ theme }) => theme.height.footer} - 20px
  );
  padding: 0 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: white;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 0;
    width: 100%;
  }
`;

export default Todolist;
