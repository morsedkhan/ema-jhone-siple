import React, { useState, useContext } from 'react';

import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramwork, handleGoogleSignIn,handleSignOut, handleFBLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';





function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    photo: ''
  })

  initializeLoginFramwork();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn= () =>{
    handleGoogleSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  const SignOut = () =>{
    handleSignOut()
    .then (res =>{
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);

    })
  }

  const fbLogin =() =>{
    handleFBLogin()
    .then(res =>{
      setUser(res);
      setLoggedInUser(res)
      history.replace(from);

    })
  }



  const handleBlur =(e) =>{

    let isFieldValid= true

    if(e.target.name === 'email'){
    isFieldValid  = /\S+@\S+\.\S+/.test(e.target.value);

  } 
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHesNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHesNumber;
    }
    if(isFieldValid){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit =(e) =>{
    if(newUser && user.email && user.password){

      createUserWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        setUser(res =>{
          setLoggedInUser(res);
          history.replace(from);
        })
      })


      }

      
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          setUser(res =>{
            res.isSignedIn = true;
            setLoggedInUser(res);
            history.replace(from);
          })
        })
      }

    e.preventDefault();

  }




  return (
    <div style={{textAlign:'center',border:'1px solid yellow'}}>
      {
        user.isSignedIn ? <button onClick={SignOut}>Sign Out</button> :

          <button onClick={googleSignIn}>Sign in</button>

      }
      <br/>
      {
        <button onClick={fbLogin}>Sign In With Facebook</button>
      }
      {
        user.isSignedIn && <div>
          <p>Welcome: {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" srcset="" />
        </div>
      }

      <h1>Our own Authentication</h1>
     <input type="checkbox" onChange={() => setNewUser(!newUser)}  name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser &&<input type="text" onBlur={handleBlur}  name="name" placeholder="your name"/>}
        <br/>
        <input type="text" onBlur={handleBlur}  name="email"  placeholder="Enter Your Email Address" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Password" required />
        <br />
        <input type="submit"  value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
    <p style={{color:'red'}}>{user.error}</p>
    {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'logged In'}Success</p>
}
    </div>
  );
}

export default Login;
