import React from 'react';
import {css} from '@emotion/css'

type AsProps = {
    about: string;
}
const AboutComp = ({about}:AsProps) => {
    const color = 'red';
    const myStyle = css`
      color: ${color};
    `
    return (
        <div>
            我是一个 AboutComp 组件 {about}
            <div className={myStyle}>按钮</div>
        </div>
    );
};



export {AboutComp,AsProps};
