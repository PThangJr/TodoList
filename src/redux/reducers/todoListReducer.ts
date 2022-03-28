import { v4 } from "uuid";
import { IAction, IData } from "../../store";
import storage from "../../utils/storage";
import {
  ADD_TODO,
  CHANGE_ALL_STATUS_TODO,
  CHANGE_STATUS_TODO,
  DELETE_ALL_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SORT_TODO,
  FILTER_TODO,
} from "../constants";

// type TTodoList = <ITodoItem>[];
// const initialState = {
//   data: [
//     { id: "1", name: "Công việc 1", isCompleted: false },
//     { id: "2", name: "Công việc 2", isCompleted: true },
//     { id: "3", name: "Công việc 3", isCompleted: false },
//     { id: "4", name: "Công việc 4", isCompleted: true },
//   ],
//   sort: "default",
//   filter: "all",
// };
interface InitState {
  data: IData[];
  sort: string;
  filter: string;
}

const todoStorage = storage("todoListData");
const initialState: InitState = {
  data: todoStorage.get() || [],
  sort: "default",
  filter: "all",
};

const todoListReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      const newDataAddTodo = [
        ...state.data,
        { id: v4(), name: action.payload, isCompleted: false },
      ];
      // Save to locale storage
      todoStorage.set(newDataAddTodo);
      return {
        ...state,
        data: newDataAddTodo,
      };
    case CHANGE_STATUS_TODO:
      const dataChangeStatusTodo = state.data.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });

      // Save to locale storage
      todoStorage.set(dataChangeStatusTodo);
      return { ...state, data: dataChangeStatusTodo };
    case DELETE_TODO:
      const dataDeleteTodo = [...state.data].filter(
        (todo) => todo.id !== action.payload
      );

      // Save to locale storage
      todoStorage.set(dataDeleteTodo);
      return { ...state, data: dataDeleteTodo };
    case DELETE_ALL_TODO:
      todoStorage.set([]);
      return { ...state, data: [] };
    case CHANGE_ALL_STATUS_TODO:
      const dataChangeAllStatusTodo = [...state.data].map((todo) => ({
        ...todo,
        isCompleted: action.payload,
      }));

      // Save to locale storage
      todoStorage.set(dataChangeAllStatusTodo);

      return { ...state, data: dataChangeAllStatusTodo };
    case UPDATE_TODO:
      if (typeof action.payload === "object") {
        const { name, id } = action.payload;
        const dataUpdateTodo = [...state.data].map((todo) => {
          if (todo.id === id) {
            return { ...todo, name };
          } else return todo;
        });

        // Save to locale storage
        todoStorage.set(dataUpdateTodo);
        return { ...state, data: dataUpdateTodo };
      }
      return state;
    case SORT_TODO:
      return { ...state, sort: action.payload };
    case FILTER_TODO:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default todoListReducer;
