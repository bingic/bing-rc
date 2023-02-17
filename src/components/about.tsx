import React from 'react';

type Props = {
    text: string;
}

export const AboutComp = ({text}: Props) => {

    console.log("About text", text);
    return (
        <div>
            Rollup About 1
        </div>
    );
};

