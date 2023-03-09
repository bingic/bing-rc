import React, {useState, useRef} from "react";
import {css} from "@emotion/css";

interface Props {
    length: number;
    label: string;
    loading: boolean;
    onComplete: (code: string) => void;
}

const InputCode = ({length, label, loading, onComplete}: Props) => {
    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef<HTMLInputElement[]>([]);

    const processInput = (e: React.ChangeEvent<HTMLInputElement>, slot: number) => {
        const num = e.target.value;
        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs.current[slot + 1].focus();
        }
        if (newCode.every((num) => num !== "")) {
            onComplete(newCode.join(""));
        }
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1].focus();
        }
    };

    return (
        <div className={cs.codeInput}>
            <label className={cs.codeLabel}>{label}</label>
            <div className={cs.codeInputs}>
                {code.map((num, idx) => {
                    return (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={num}
                            autoFocus={!code[0].length && idx === 0}
                            readOnly={loading}
                            onChange={(e) => processInput(e, idx)}
                            onKeyUp={(e) => onKeyUp(e, idx)}
                            ref={(ref) => inputs.current.push(ref as HTMLInputElement)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default InputCode;

const cs = {
    codeInput: css`
      display: flex;
      flex-direction: column;
      align-items: start;
    `,
    codeLabel: css`
      margin-bottom: 16px;`,

    codeInputs: css`
      display: flex;
      justify-content: start;
      align-items: center;

      input {
        //border: none;
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        text-align: center;
        height: 60px;
        width: 46px;
        border-radius: 10px;
        margin: 0 4px;
        border: 2px solid #858585;
        font-size: 38px;

        &:focus {
          outline: none;
          border: 2px solid #2e2e2e;

        }

        &:nth-child(0n) {
          margin-right: 24px;
        }
      }

      input:focus {
        outline: none;
        border: 2px solid #2e2e2e;
      }
    `
}