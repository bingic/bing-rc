/// <reference types="react" />
import { IconFont } from '../../Types';
type OwnProps = {
    glyph: IconFont;
    onClick: () => void;
    stepIsActive: boolean;
    stepIsComplete: boolean;
    text: string;
    showCheckmark: boolean;
    stepIsReached: boolean;
};
export declare const SubwayNavStep: (props: OwnProps) => JSX.Element;
export {};
