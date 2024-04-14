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
    const [loading, setLoading] =useState(true);
    console.log(loading)
   
    
      
    // create user
    const createUser = (email, password) =>{
        setLoading(true)
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
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider )
    }

    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout =()=>{
        setUser(null)
        signOut(auth)
    }





    // observer 
    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
               setLoading(false)
               
              
            } 
          });
          return () => unsubscribe();
    },[])

   const allValues ={
    user,
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
    loading
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