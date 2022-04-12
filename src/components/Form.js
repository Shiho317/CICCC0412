import React from 'react';

const Form = ({ afterSubmit, userNameRef, passwordRef }) => {

  return (
    <form onSubmit={afterSubmit}>
        <input type="text" name="username" placeholder='Enter username' ref={userNameRef}/>
        <input type="password" name="password" placeholder='Enter password' ref={passwordRef}/>
        <button type="submit">Sign Up</button>
    </form>
  )
}

export default Form