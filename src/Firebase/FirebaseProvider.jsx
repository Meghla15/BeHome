import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';



export const AuthContext = createContext(null)

// google Provider
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user, setUser] =useState(null); 
    console.log(user)
      
    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn User
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider )
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
    createUser,
    signInUser,
    googleLogin,
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