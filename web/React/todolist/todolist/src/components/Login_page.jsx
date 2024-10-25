import React, { useEffect, useState } from 'react'

function Login_page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] =  useState('');
    const [errors, setErrors] = useState({});
    useEffect(()=>
    {
        validateForm();
    },[username,password]);
    const validateForm=()=>{
        const errors = {};
        if(username.trim( )=== ''){
            errors.username = 'Username is required';
        }
        if(password.trim( )=== ''){
            errors.password = 'pasword is required';
    }
         setErrors(errors);
};
   
const handleSubmit = (event) =>{
    event.preventDefault();
    if(Object.keys(errors).length === 0){
        console.log('form submitted',{username,password});
    }
    else{
        console.log('form is invalid',errors);
    }
};
const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    };
const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

  return (
    <div>
         <h2>Login</h2>
      <form onSubmit={handleSubmit} ac>
       <label >Username  : <input type="text" 
        placeholder='Username' />
        </label> 
        <br />
        <label >password :<input type="password"
        placeholder='password' />
        </label>
        <br></br>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
};
export default Login_page
