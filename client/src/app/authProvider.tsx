"use client";

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({
    Auth:{
        Cognito:{
            userPoolId:process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID as string,
            
        }
    }
})

const formFields = {
    signUp: {
      username: {
        order: 1,
        placeholder: "Choose a username",
        label: "Username",
        inputProps: { required: true },
      },
      email: {
        order: 1,
        placeholder: "Enter your email address",
        label: "Email",
        inputProps: { type: "email", required: true },
      },
      password: {
        order: 3,
        placeholder: "Enter your password",
        label: "Password",
        inputProps: { type: "password", required: true },
      },
      confirm_password: {
        order: 4,
        placeholder: "Confirm your password",
        label: "Confirm Password",
        inputProps: { type: "password", required: true },
      },
    },
  };

 const AuthProvider =({children}: any)=>{
    return (
        <div className="mt-5">
            <Authenticator formFields={formFields}>
                {({user}:any)=> user ? (<div>{children}</div>):(<div>Please Sign in below:</div>)}

            </Authenticator>

        </div>
    )

}

export default AuthProvider;