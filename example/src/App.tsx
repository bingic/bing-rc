import React, {ChangeEvent} from "react"
import {Alert} from "./components/Alert/Alert";
import {ComponentColor, ComponentSize, IconFont} from "./Types";
import "./app.scss"
import "./Styles/shared.scss"

import Accordion from './components/Accordion';
import {ColorPicker} from "./components/ColorPicker/ColorPicker";
import {Button} from "./components/Button/Composed/Button";
import {ButtonGroup} from "./components/Button/Composed/ButtonGroup";
import {ConfirmationButton} from "./components/Button/Composed/ConfirmationButton";
import {Dropdown} from "./components/Dropdowns";
import {SelectDropdown} from "./components/Dropdowns/Composed/SelectDropdown";
import {RangeSlider} from "./components/Inputs";
import {Overlay} from "./components/Overlay";
import InputCode from "./views/CodeInput";


const App = () => {

    const [rangeSliderValue, setRangeSliderValue] = React.useState(0);
    const handler = (value: string) => {
        console.log("handler", value)
        setOnColor(value)
    }
    const onConfirm = (e: any) => {

    }

    const handleRangeSlider = (value: ChangeEvent<HTMLInputElement>) => {
        console.log("handleRangeSlider", value)
        setRangeSliderValue(parseInt(value.target.value))
    }


    function* myGenerator(): Generator<Promise<Response>, void, unknown> {
        const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
        const result = yield fetch('https://api.example.com/result');
        console.log(result);
    }

    const gen = myGenerator();

    const handleResult = (result: IteratorResult<Promise<Response>, void>) => {
        if(result.done) return;
        result.value.then((data) => {
            console.log("result.value", data)
            handleResult(gen.next(data));
        });
    }

    handleResult(gen.next());



    const [onColor, setOnColor] = React.useState("#000000")
    const [loading, setLoading] = React.useState(false)
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

                    <ConfirmationButton confirmationButtonText={"则适合"} onConfirm={onConfirm}
                                        confirmationLabel={"诶哦额"}> 12
                    </ConfirmationButton>
                </Button>

            </ButtonGroup>
            <div style={{height: "300px", width: "330px"}}>
                <ColorPicker color={onColor} onChange={handler}/>
            </div>


            <Dropdown
                menu={onCollapse => <Dropdown.Menu onCollapse={onCollapse}/>}
                button={(active, onClick) => <Dropdown.Button active={active} onClick={onClick}/>}
            />

            <SelectDropdown onSelect={
                (value) => {
                    console.log("onSelect", value)
                }
            } options={
                ["1", "2", "3"]

            } selectedOption={
                "1"
            }/>

            <RangeSlider value={rangeSliderValue} min={0} max={100} step={1} onChange={handleRangeSlider}
                         children={<div>{rangeSliderValue}</div>}/>

            <button className={"button"}>button</button>
            <Button text={"text"} size={ComponentSize.Medium}>按钮</Button>
            <Overlay.Container>
                <Overlay.Body>
                    <Overlay.Header title={"title"} onDismiss={() => {
                    }}/>
                </Overlay.Body>
            </Overlay.Container>


            <InputCode
                length={6}
                label="Code Label"
                loading={loading}
                onComplete={code => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 10000);
                }}
            />
        </>
    );
}

export default App;
