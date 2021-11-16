import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA7IQCKssE6prFPhcU1gFGKWH1oKK298QI",
    authDomain: "ubiqum-course3-task3.firebaseapp.com",
    databaseURL: "https://ubiqum-course3-task3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ubiqum-course3-task3",
    storageBucket: "ubiqum-course3-task3.appspot.com",
    messagingSenderId: "899069188716",
    appId: "1:899069188716:web:ea5b551477ed96fb139649"
  };

// const firebase = initializeApp(firebaseConfig);

const firebase = initializeApp(firebaseConfig);
const firebaseSignOut = () => signOut(getAuth(firebase));

//logout button
export const LogOut =() =>{
    return (
        <button onClick={()=>firebaseSignOut()}>Log Out</button>
    )
}

export const LogInButton =() =>{
    return (
        <button onClick={() => signInWithGoogle()}>Sign In</button>
    )
}


const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};


//Same register but as a form instead of a popup

// const SingUp = () => {
//     return (
//         <div class="container">
//             <form>
//                 <h3>Sign Up</h3>
//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" className="form-control" placeholder="First name" />
//                 </div>
//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name" />
//                 </div>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="#">sign in?</a>
//                 </p>
//             </form>
//         </div>
//     );
// }

// //register, login, logout page
// const FormRegister = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid d-flex justify-content-around nav-height">
//                 <Link className="navbar-brand" to="/loginform">Log In</Link>
//                 <Link className="navbar-brand" to="/registerform">Sign Up</Link>
//             </div>
//         </nav>
//         )   
// }

// //login page
// const LogIn = () => {
//     const [user] = useUserState();
//     return (
//         <div class="container">
//             <form>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">Log In</button>
//             </form>
//         )
//             <div>
//                 { user ? <LogOut /> : <LogIn/> }
//             </div>
//         </div>
//     )
// }


//login and singup buttons
// const RegisterPage =()=>{
//     return (
//         <div>
//             <Link className="navbar-brand" to={"/log-in"} component={LogIn}>Log In</Link>
//             <Link className="navbar-brand" to={"/sign-up"} component={SingUp}>Sign up</Link>
//         </div>

//     )
// }


