// @ts-ignore
import RollupReactComponent from '../../build/components';
import React from "react";
// @ts-ignore

type AppProps = {
    name: string;
};

const App = ({name}: AppProps) => {
    console.log("app example name: ", name,);
    console.log("app example time: ", new Date().getTime());
    return (
        <>
            <h1>This is React Project 4</h1>
            <RollupReactComponent/>
            {/*<About text={"这是示例传给 组件的内容"}></About>*/}
        </>
    )
}
export default App;
