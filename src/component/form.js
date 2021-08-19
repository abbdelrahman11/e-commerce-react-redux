import React from "react";
const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addCourse}>
        <input
          type="text"
          value={props.current}
          onChange={props.updateCourse}
        />
        <button type="submit">Add course</button>
      </form>
    </div>
  );
};
export default Form;
