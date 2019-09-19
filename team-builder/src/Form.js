import React from "react";

export default function Form(props) {
  // what data does the form need to populate itself?
  // what callbacks does the form need to perform
  // its basic functions of updating fields and submitting?
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
  const { name, email, role } = props.memberForm;
  const isDisabled = () => {
    if (!name || !email || !role) {
      return true;
    }
    return false;
  };

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input value={name} onChange={onNameChange} id="nameInput" type="text" />
      <br></br>
      <label htmlFor="emailInput">Email</label>
      <input
        value={email}
        onChange={onEmailChange}
        id="emailInput"
        type="email"
      />
      <br></br>
      <label htmlFor="roleInput">Role</label>
      <input value={role} onChange={onRoleChange} id="roleInput" type="text" />
      <br></br>
      <button disabled={isDisabled()} onClick={onFormSubmit}>
        submit
      </button>
    </form>
  );
}
