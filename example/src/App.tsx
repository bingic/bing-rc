// @ts-ignore
import {AboutComp,UserComp} from '../../build/react-rollup-component';
import React from "react";


type AppProps = {
    name: string;
};

const App = ({name}: AppProps) => {
    console.log("app example name: ", name,);
    console.log("app example time: ", new Date().getTime());
    const [count, setCount] = React.useState(16);
    return (
        <>
            <h1>This is React Project {count}</h1>
            <AboutComp text={"hello about"}/>
            <UserComp/>
            {/*<About text={"这是示例传给 组件的内容"}></About>*/}
        </>
    )
}
export default App;
