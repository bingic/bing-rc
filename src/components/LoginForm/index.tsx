import React from 'react';
import {css} from '@emotion/css'


const LoginForm = () => {

    const main = css`
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #240046;
      max-height: 420px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 7px 7px 10px 3px #24004628;
      
      .input {
        width: 100%;
        height: 40px;
        background: #e0dede;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 4px;
      }
      .login {
        position: relative;
        width: 100%;
        height: 100%;

        .form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 24px;

          > label {
            margin: 25% 0 5%;
            color: #fff;
            font-size: 2rem;
            justify-content: center;
            display: flex;
            font-weight: bold;
            cursor: pointer;
            transition: .5s ease-in-out;
          }

       
        }

      }
    `
    return (
        <div className={main}>
            <input type="checkbox" id="chk" aria-hidden="true">

12
            </input>

        </div>
    );
};

export default LoginForm;
