import React from "react"
import {Alert} from "./components/Alert/Alert";
import {ComponentColor, ComponentSize, IconFont} from "./Types";
import "./app.scss"
import "./Styles/shared.scss"

import Accordion from './components/Accordion';
import {ColorPicker} from "./components/ColorPicker/ColorPicker";
import {Button} from "./components/Button/Composed/Button";
import {ButtonGroup} from "./components/Button/Composed/ButtonGroup";
import {ConfirmationButton} from "./components/Button/Composed/ConfirmationButton";


const App = () => {

    const handler = (value: string) => {
        console.log("handler", value)
        setOnColor(value)
    }
    const onConfirm = (e: any) => {

    }

    const [onColor, setOnColor] = React.useState("#000000")
    return (
        <>
            <Alert color={ComponentColor.Secondary} id={"1233"} icon={IconFont.AlertTriangle}/>
            <Accordion>
                <Accordion.AccordionHeader>
                    Accordion AccordionHeader
                </Accordion.AccordionHeader>
                <Accordion.AccordionBodyItem>Accordion Title</Accordion.AccordionBodyItem>
            </Accordion>
            <Button text={"按钮"} size={ComponentSize.ExtraSmall}></Button>
            <ButtonGroup>
                <Button titleText={"艾尔艾"} text={"按钮"} size={ComponentSize.ExtraSmall}></Button>
                <Button text={"按钮"} size={ComponentSize.ExtraSmall}>

                    <ConfirmationButton confirmationButtonText={"则适合"} onConfirm={onConfirm} confirmationLabel={"诶哦额"}> 12</ConfirmationButton>
                </Button>

            </ButtonGroup>
            <div style={{height: "300px", width: "330px"}}>
                <ColorPicker color={onColor} onChange={handler}/>
            </div>
            <button className={"button"}>button</button>
        </>
    )
        ;
}

export default App;
