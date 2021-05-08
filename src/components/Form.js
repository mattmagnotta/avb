import React, { useState } from "react";

// custom hook to get the input value from the form
const useInputValue = (intailValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = (props) => {
  let { comments, setComments } = props.props;
  let { handleClose } = props;

  const commentInputValue = useInputValue("");
  const commentName = useInputValue("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setComments([
          { body: commentInputValue.value, name: commentName.value },
          ...comments,
        ]);
        handleClose();
      }}
    >
      <input {...commentName} />
      <input {...commentInputValue} />
      <button> ADD COMMENT </button>
    </form>
  );
};
export default Form;
