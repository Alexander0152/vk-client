import * as React from "react";
import LoginModal from './Modal/LoginModal'
import SignInModal from './Modal/SigninModal'
import './style.css';
// import SignInModal from './Modal/SigninModal'

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
         <h1>
           Hi {props.userName} from React! Welcome to {props.lang}!
           <LoginModal />
           <SignInModal />
         </h1>
       );
