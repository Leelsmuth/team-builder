import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const initialTeamList = [
  // why is it useful to have a unique id?
  { name: "gabe", email: "gabe@yahoo.com", role: "front-end developer" },
  { name: "luke", email: "luke@gmail.com", role: "back-end developer" },
  { name: "josh", email: "josh@rocketmail.com", role: "Data Analyst" }
];

const initialMemberForm = {
  name: "",
  email: "",
  role: ""
};

export default function App() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [memberForm, setMemberForm] = useState(initialMemberForm);

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setMemberForm({
      name: e.target.value,
      email: memberForm.email,
      role: memberForm.role
    });
  };

  const onEmailChange = e => {
    // we have the new value for the email input inside e.target.value
    setMemberForm({
      name: memberForm.name,
      email: e.target.value,
      role: memberForm.role
    });
  };

  const onRoleChange = e => {
    // we have the new value for the role input inside e.target.value
    setMemberForm({
      name: memberForm.name,
      email: memberForm.email,
      role: e.target.value
    });
  };

  const onFormSubmit = e => {
    // we DO need the event object
    e.preventDefault();
    const newTeamMember = {
      name: memberForm.name,
      email: memberForm.email,
      role: memberForm.role
    };
    const newTeamList = teamList.concat(newTeamMember);
    setTeamList(newTeamList);
    setMemberForm(initialMemberForm);
  };

  return (
    <div className="App">
      <h1>TEAM BUILDER</h1>
      <Form
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        memberForm={memberForm}
        onFormSubmit={onFormSubmit}
      />
      {teamList.map(friend => (
        <h5 key={friend}>
          {friend.name} is a {friend.role}.
        </h5>
      ))}
    </div>
  );
}
