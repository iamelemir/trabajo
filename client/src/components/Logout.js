import React from "react";

const Logout = ({ handleSubmit }) => {
  return <button onClick={e => handleSubmit(false)}>Sign out</button>;
};

export default Logout;