import { useState } from "react";

const UserForm = ({ getUserInput }) => {
  const [userInput, setUserInput] = useState("");
  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getUserInput(userInput);
  };
  return (
    <form onSubmit={submitHandler}>
      <input data-testid ="test-user1" type="text" onChange={onChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;
