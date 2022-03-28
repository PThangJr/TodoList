import { createStore, Store } from "redux";
import rootReducer from "../redux/reducers";
export type TPayload = { id: string; name: string } | string | boolean;
export interface IAction {
  type: string;
  payload: TPayload;
}
export interface IData {
  id: string;
  name: string;
  isCompleted: boolean;
}
export type IState = {
  todoList: {
    data: IData[];
    sort: string;
    all: string;
    filter: string;
  };
};
const store: Store<IState, IAction> = createStore(rootReducer);
export default store;
