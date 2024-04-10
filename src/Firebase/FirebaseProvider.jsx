import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';



export const AuthContext = createContext(null)

// google Provider
const googleProvider = new GoogleAuthProvider();

//github Provider 
const githubProvider = new GithubAuthProvider(); 

const FirebaseProvider = ({children}) => {
    const [user, setUser] =useState(null); 
    
      
    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
     const updateUserProfile =(name,image) =>{
       return updateProfile(auth.currentUser,
             {
            displayName: name, photoURL: image
          })
         
          
     }

    // signIn User
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider )
    }

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout =()=>{
        setUser(null)
        signOut(auth)
    }





    // observer 
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
               
              
            } 
          });
    },[])

   const allValues ={
    user,
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
   }

    return (
        <div>
            
           <AuthContext.Provider value={allValues}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;