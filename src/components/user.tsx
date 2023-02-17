import React, {useEffect, useState} from 'react';
import {css} from '@emotion/css'

export const UserComp = () => {
    // const color = 'red';
    const [color, setColor] = useState('red');
    useEffect(() => {
        //open timer
        const timer = setInterval(() => {
            setColor(color === 'red' ? 'blue' : 'red');
        }, 1000);
        //close timer
        return () => clearInterval(timer);
    }, []);

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


