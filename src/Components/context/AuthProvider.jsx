import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../friebase/friebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email,password)=>{



        return createUserWithEmailAndPassword(auth,email,password)
    }


    const singInUser = (email,password)=>{

      return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {

        createUser,
        email:'hossain',
        singInUser

    }
    return (
      <AuthContext value={userInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;