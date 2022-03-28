import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../../GlobalStyled";
import {
  changeAllStatusTodo,
  deleteAllTodo,
  sortTodo,
} from "../../redux/actions";
import { IState } from "../../store";
import Form from "../Form";
import { ITodoState } from "../TodoList";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  //************Declaration***********
  const dispatch = useDispatch();
  //************Initial state*********

  //countSort = 0 => no sort, countSort = 1 => sort desc, countSort = 2 => sort asc
  const [countSort, setCountSort] = React.useState<number>(0);
  //************Side effect***********
  React.useEffect(() => {
    if (countSort === 0) {
      // dispatch()
    }
    if (countSort === 1) {
    }
    if (countSort === 2) {
    }
  }, [countSort]);
  //***********Get data from store*****************
  const { sort, data } = useSelector<IState>(
    (state) => state.todoList
  ) as ITodoState;
  const hasTodoListData = data.length > 0;
  // console.log(todoList.sort);
  //***********Handle event**************
  const handleChangeAllCompleted = () => {
    if (hasTodoListData) {
      dispatch(changeAllStatusTodo(true));
    }
  };
  const handleChangeAllPending = () => {
    if (hasTodoListData) {
      dispatch(changeAllStatusTodo(false));
    }
  };
  const handleDeleteAll = () => {
    if (hasTodoListData) {
      if (window.confirm("Bạn có muốn xoá tất cả todo không ?")) {
        dispatch(deleteAllTodo());
      }
    }
  };
  const handleSort = () => {
    if (hasTodoListData) {
      setCountSort((prevState) => (prevState >= 2 ? 0 : prevState + 1));
      if (countSort === 0) {
        dispatch(sortTodo("sortCompleted"));
      }
      if (countSort === 1) {
        dispatch(sortTodo("sortPending"));
      }
      if (countSort === 2) {
        dispatch(sortTodo("default"));
      }
    }
  };

  //***********Render UI*****************
  const renderSortIcon = () => {
    if (sort === "default") {
      return (
        <Icon>
          <i className="fa-solid fa-sort"></i>
        </Icon>
      );
    }
    if (sort === "sortCompleted") {
      return (
        <Icon style={{ color: "#44bd32" }}>
          <i className="fa-solid fa-check"></i>
        </Icon>
      );
    }
    if (sort === "sortPending") {
      return (
        <Icon style={{ color: "#eb2f06" }}>
          <i className="fa-solid fa-xmark"></i>
        </Icon>
      );
    }
  };
  return (
    <StyledHeader>
      <h3>Todolist</h3>
      <Form />
      <OptionContainer>
        <ButtonSort onClick={handleSort}>
          Sort
          {renderSortIcon()}
        </ButtonSort>
        <ButtonAllCompleted onClick={handleChangeAllCompleted}>
          All complete
          <Icon>
            <i className="fa-solid fa-check"></i>
          </Icon>
        </ButtonAllCompleted>
        <ButtonAllPending onClick={handleChangeAllPending}>
          All pending
          <Icon>
            <i className="fa-solid fa-xmark"></i>
          </Icon>
        </ButtonAllPending>
        <ButtonRemoveAll onClick={handleDeleteAll}>
          Remove all
          <Icon>
            <i className="fa-solid fa-trash-can"></i>
          </Icon>
        </ButtonRemoveAll>
      </OptionContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  height: ${({ theme }) => theme.height.header};
  margin-bottom: 20px;
  & > h3 {
    font-size: 4rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
    color: #fff;
  }
  & > button {
    flex: 1;
  }
`;

const ButtonSort = styled(Button)`
  background-color: ${({ theme }) => theme.background.btnSort};
  font-weight: bold;
  & > p {
    color: ${({ theme }) => theme.background.btnSort};
  }
`;
const ButtonAllCompleted = styled(Button)`
  background-color: ${({ theme }) => theme.background.btnAllCompleted};
  font-weight: bold;
  & > p {
    color: ${({ theme }) => theme.background.btnAllCompleted};
  }
`;
const ButtonAllPending = styled(Button)`
  background-color: ${({ theme }) => theme.background.btnAllPending};
  font-weight: bold;
  & > p {
    color: ${({ theme }) => theme.background.btnAllPending};
  }
`;
const ButtonRemoveAll = styled(Button)`
  background-color: ${({ theme }) => theme.background.btnRemoveAll};
  font-weight: bold;
  & > p {
    color: ${({ theme }) => theme.background.btnRemoveAll};
  }
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Icon = styled.p`
  font-size: 1.3rem;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
