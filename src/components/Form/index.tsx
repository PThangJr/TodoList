import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Input } from "../../GlobalStyled";
import { addTodo } from "../../redux/actions";

interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  //************Declaration***********
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  //************Initial state*********
  const [name, setName] = React.useState("");

  //************Side effect***********

  //***********Get data from store*****************

  //***********Handle event**************
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };
  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setName("");
      dispatch(addTodo(name.trim()));
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  //***********Render UI*****************

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <InputField
        ref={inputRef}
        value={name}
        onChange={handleChangeValue}
        placeholder="Thêm công việc..."
        autoFocus
      />
      <ButtonAdd>
        <i className="fa-solid fa-circle-plus"></i>
        Thêm
      </ButtonAdd>
    </FormContainer>
  );
};
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
`;
const InputField = styled(Input)`
  padding: 8px;
  outline: none;
  border: 1px solid grey;
  border-radius: 8px 0 0 8px;
  width: 350px;
  flex: 1;
  height: 100%;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
`;
const ButtonAdd = styled(Button)`
  border-radius: 0 8px 8px 0;
  background: #45aaf2;
  font-weight: bold;
  height: 100%;
  border: 1px solid grey;
  width: 120px;
  /* display: flex; */

  & > i {
    margin-right: 8px;
  }
`;
export default Form;
