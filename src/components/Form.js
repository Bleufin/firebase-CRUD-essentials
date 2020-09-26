import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = e => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button>Add Todo</button>
    </div>
  );
}

export default Form;
