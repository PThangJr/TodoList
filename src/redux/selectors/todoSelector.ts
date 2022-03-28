import { ITodoState } from "../../components/TodoList";
import { IData, IState } from "../../store";

const todoSelector = (state: IState): ITodoState => {
  let newData;
  if (state.todoList.sort === "sortCompleted") {
    newData = [...state.todoList.data].sort(
      (a: IData, b: IData): number =>
        Number(b.isCompleted) - Number(a.isCompleted)
    );
    // return { ...state.todoList, data: newData };
  }
  if (state.todoList.sort === "sortPending") {
    newData = [...state.todoList.data].sort(
      (a: IData, b: IData): number =>
        Number(a.isCompleted) - Number(b.isCompleted)
    );
    // return { ...state.todoList, data: newData };
  }
  if (state.todoList.filter === "completed") {
    newData = [...state.todoList.data].filter((todo) => todo.isCompleted);
    // return { ...state.todoList, data: newData };
  }
  if (state.todoList.filter === "pending") {
    newData = [...state.todoList.data].filter((todo) => !todo.isCompleted);
  }
  if (newData) {
    return { ...state.todoList, data: newData };
  } else {
    return state.todoList;
  }
};
export default todoSelector;
