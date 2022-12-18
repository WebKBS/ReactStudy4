import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEneterUsername] = useState("");
  const [enteredAge, setEneteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      // +기호를 넣어서 number로 바꿔준다.

      setError({
        title: "Invalid input",
        message: "Please enter a valid age > 0",
      });
      return;
    }
    console.log(enterUsername, enteredAge);

    props.onAddUser(enterUsername, enteredAge); // 상태 업데이트를 위한 함수. 매개변수로 값을 전달해줘야한다.

    setEneterUsername(""); // input 엘리먼트에 value값을 추가하면 초기화 할 수 있다.
    setEneteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEneterUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEneteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/* 스타일적용 시키려면 props로 전달해야한다. */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterUsername} // value값을 추가하면 초기화할수 있다.
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge} // value값을 추가하면 초기화할수 있다.
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
