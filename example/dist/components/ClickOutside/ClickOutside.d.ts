import { PureComponent } from 'react';
interface Props {
    /** Function to call when click outside is detected */
    onClickOutside: (e: any) => void;
}
export declare class ClickOutside extends PureComponent<Props> {
    static readonly displayName = "ClickOutside";
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
    private handleClickOutside;
}
export {};
