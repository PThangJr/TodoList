import { IAction, TPayload } from "../../store";
import {
  ADD_TODO,
  CHANGE_ALL_STATUS_TODO,
  CHANGE_STATUS_TODO,
  DELETE_ALL_TODO,
  DELETE_TODO,
  FILTER_TODO,
  SORT_TODO,
  UPDATE_TODO,
} from "../constants";

export const addTodo = (payload: TPayload): IAction => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const changeStatusTodo = (payload: TPayload): IAction => {
  return {
    type: CHANGE_STATUS_TODO,
    payload,
  };
};
export const deleteTodo = (payload: TPayload): IAction => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const deleteAllTodo = () => {
  return {
    type: DELETE_ALL_TODO,
  };
};
export const changeAllStatusTodo = (payload: TPayload): IAction => {
  return {
    type: CHANGE_ALL_STATUS_TODO,
    payload,
  };
};
export const updateTodo = (payload: TPayload): IAction => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
export const sortTodo = (payload: TPayload): IAction => {
  return {
    type: SORT_TODO,
    payload,
  };
};
export const filterTodo = (payload: TPayload): IAction => {
  return {
    type: FILTER_TODO,
    payload,
  };
};
