import React from 'react';

const RegiterForm = () => {
  return (
    <form className="register-form">
      <input id="username" type="text" placeholder="Username"/>
      <input id="mail" type="email" placeholder="Email adress" />
      <input id="password" type="password" placeholder="Password" />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default RegiterForm;