/// <reference types="react" />
interface Props {
    length: number;
    label: string;
    loading: boolean;
    onComplete: (code: string) => void;
}
declare const InputCode: ({ length, label, loading, onComplete }: Props) => JSX.Element;
export default InputCode;
