import React from "react";
// @ts-ignore
import {AboutComp, LoginForm,UserComp} from "../../build/index";


const App = () => {
    return (
        <>
            <AboutComp about={"12"}/>
            <UserComp user={"user"}/>
        </>
    )
}
export default App;
