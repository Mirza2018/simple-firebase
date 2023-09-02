import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProbider = new GithubAuthProvider()

    const handelGooglePopUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.error('error', error.massage);

            })
    }
    const handleGithubPopUp = () => {
        signInWithPopup(auth, gitHubProbider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handelSignOut = () => {
        signOut(auth)
            .then(result => {
                // console.log(result);
                setUser('');
            })
            .catch(error => {
                // console.log(error);
            })

    }

    return (
        <div>
            {user ? <button onClick={handelSignOut}>Sign Out</button> :
                <>
                    <button onClick={handelGooglePopUp}>Google Login</button>
                    <button onClick={handleGithubPopUp}>Github LOgin</button>
                </>
            }


            {user && 
            
            <div>
                <h1>User: {user?.displayName}</h1>
                <img src={user.photoURL}/>
                <p>Email {user.email}</p>
                </div>}
        </div>
    );
};

export default Login;