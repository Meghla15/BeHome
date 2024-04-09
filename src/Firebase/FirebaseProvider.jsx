import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from './firebase.config';


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
      
    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

   const allValues ={name:"megh"}

    return (
        <div>
            
           <AuthContext.Provider value={allValues}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;