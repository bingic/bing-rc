import React from "react";
// @ts-ignore
import   { AboutComp,UserComp } from '../../build/bundle';  // 从打包后的文件中引入
const App = () => {
    const [count, setCount] = React.useState(16);
    return (
        <>
            <AboutComp about={'checkout About'} />
            <UserComp user={"checkout User"}/>
            <h1>This is React Project {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
}
export default App;
