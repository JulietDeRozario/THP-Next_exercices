import React from 'react';

const LoginForm = () => {
  return (
    <form className="register-form">
      <input id="username" type="text" placeholder="Username or email"/>
      <input id="password" type="password" placeholder="Password" />
      <input id="password-confirmation" type="password" placeholder="Confirm password" />
      <button type="submit">Log in</button>
    </form>
  )
}

export default LoginForm;