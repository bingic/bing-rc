import React from 'react';

type ModelProps = {
    name: string;
    age: number;
};

const ModelComponent: React.FC<ModelProps> = ({age,name}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};
export default ModelComponent