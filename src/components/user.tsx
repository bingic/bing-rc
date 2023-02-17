import React from 'react';
import {css} from '@emotion/css'

type UProps = {
    user: string;
}
const UserComp = ({user}:UProps) => {
    const color = 'red';

    const myStyle = css`
      color: ${color};
    `
    return (
        <div>
            我是一个用户组件 112 123
            <div className={myStyle}>按钮</div>
        </div>
    );
};


export {UserComp,UProps};
