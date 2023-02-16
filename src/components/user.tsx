import React from 'react';
import {css} from '@emotion/css'


const myStyle = css`
  color: rebeccapurple;
`
const User = () => {
    return (
        <div>
            我是一个用户组件  000
            <div className={myStyle}>按钮</div>
        </div>
    );
};

export default User;
