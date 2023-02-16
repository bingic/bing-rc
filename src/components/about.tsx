import React from 'react';

type Props = {
    text: string;
}

const About = ({text}:Props) => {

    console.log("About text", text);
    return (
        <div>
          Rollup  About 1
        </div>
    );
};

export default About;
