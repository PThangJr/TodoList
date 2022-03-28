import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Input } from "../../GlobalStyled";
import { changeStatusTodo, deleteTodo, updateTodo } from "../../redux/actions";
import { Icon } from "../Header";
import { ITodo } from "../TodoList";

export interface ITodoItemProps {
  todo: ITodo;
  onChooseInputUpdate: (id: string) => void;
  isTodoItemUpdated: boolean;
}
interface IStyledTodoItemProps {
  readonly isCompleted: boolean;
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = (props) => {
  //************Declaration***********
  const dispatch = useDispatch();
  const { todo, onChooseInputUpdate, isTodoItemUpdated } = props;
  const { id, name, isCompleted } = todo;
  const nameRef = React.useRef<HTMLDivElement | null>(null);
  const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
  //************Initial state*********
  const [value, setValue] = React.useState(name);
  const [textAreaHeight, setTextAreaHeight] = React.useState("30px");

  //************Side effect***********

  //***********Get data from store*****************

  //***********Handle event**************
  const handleChangeStatusTodo = () => {
    dispatch(changeStatusTodo(id));
  };
  const handleDeleteTodo = () => {
    if (window.confirm(`Bạn có muốn xoá "${name}" không ?`)) {
      dispatch(deleteTodo(id));
    }
  };
  const handleShowFormUpdate = () => {
    if (!isTodoItemUpdated) {
      if (nameRef.current) {
        setTextAreaHeight(`${nameRef.current.clientHeight}px`);
        // textAreaRef.current.style.height = nameRef.current.height;
      }
    }
    onChooseInputUpdate(id);
  };
  const handleCloseFormUpdate = () => {
    onChooseInputUpdate("");
  };
  const handleChangeInputUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    // e.currentTarget.height =
  };
  const handleKeyDownInputUpdate = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      handleUpdate();
    }
  };
  const handleUpdate = () => {
    if (value.trim()) {
      dispatch(updateTodo({ id, name: value.trim() }));
    } else {
      dispatch(deleteTodo(id));
    }
    onChooseInputUpdate("");
  };
  const handleFocus = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };
  //***********Render UI*****************
  const renderTodoItemAction = () => {
    if (isTodoItemUpdated) {
      return (
        <>
          <ButtonUpdate onClick={handleUpdate}>
            <i className="fa-solid fa-floppy-disk"></i>
          </ButtonUpdate>
          <ButtonDelete onClick={handleCloseFormUpdate}>
            <i className="fa-solid fa-xmark"></i>
          </ButtonDelete>
        </>
      );
    } else {
      return (
        <>
          <ButtonUpdate onClick={handleShowFormUpdate}>
            <i className="fa-solid fa-pen-to-square"></i>
          </ButtonUpdate>
          <ButtonDelete onClick={handleDeleteTodo}>
            <i className="fa-solid fa-trash"></i>
          </ButtonDelete>
        </>
      );
    }
  };
  return (
    <StyledTodoItem isCompleted={isCompleted}>
      {!isTodoItemUpdated && (
        <Flex>
          {isCompleted ? (
            <IconCompleted>
              <i className="fa-solid fa-check"></i>
            </IconCompleted>
          ) : (
            <IconPending>
              <i className="fa-solid fa-xmark"></i>
            </IconPending>
          )}
          <TodoItemName
            ref={nameRef}
            isCompleted={isCompleted}
            onClick={handleChangeStatusTodo}
          >
            {name}
          </TodoItemName>
        </Flex>
      )}
      {isTodoItemUpdated && (
        <InputField
          autoFocus
          value={value || ""}
          onFocus={handleFocus}
          onChange={handleChangeInputUpdate}
          onKeyDown={handleKeyDownInputUpdate}
        />
      )}
      {/* {isTodoItemUpdated && (
        <TextAreaField
          ref={textAreaRef}
          autoFocus
          value={value}
          style={{ height: textAreaHeight }}
          onChange={handleChangeInputUpdate}
        />
      )} */}

      <TodoItemAction>{renderTodoItemAction()}</TodoItemAction>
    </StyledTodoItem>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const InputField = styled(Input)`
  margin: 5px;
  flex: 1;
`;
const TextAreaField = styled.textarea`
  margin: 5px;
  flex: 1;
  font-size: 1.6rem;
  padding: 8px;
`;
const TodoItemName = styled.div<IStyledTodoItemProps>`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  font-style: ${({ isCompleted }) => (isCompleted ? "italic" : "default")};
  flex: 1;
  margin-left: 10px;
  cursor: pointer;
  padding: 8px 0;
  word-wrap: break-word;
  overflow: hidden;
`;
const TodoItemAction = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTodoItem = styled.li<IStyledTodoItemProps>`
  display: flex;
  align-items: center;
  background: ${({ isCompleted }) => (isCompleted ? "#3fc012" : "#f1206a")};
  box-shadow: 2px 5px 10px rgb(0 0 0 / 10%), -2px -5px 10px rgb(0 0 0 / 10%),
    inset 0px 0px 10px rgb(0 0 0 / 10%);
  border-radius: 8px;
  transition: 0.5s;
  border: 3px solid #fff;
  color: #fff;
  /* cursor: pointer; */
  /* padding: 5px 0; */

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
const ButtonUpdate = styled(Button)`
  background: none;
  color: aqua;
  box-shadow: none;
  margin-right: 5px;
`;
const ButtonDelete = styled(Button)`
  background: none;
  color: #dadada;
  box-shadow: none;
`;
const IconCompleted = styled(Icon)`
  color: ${({ theme }) => theme.background.btnAllCompleted};
`;
const IconPending = styled(Icon)`
  color: ${({ theme }) => theme.background.btnAllPending};
`;
export default TodoItem;
