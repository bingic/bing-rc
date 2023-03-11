import React from 'react';
import { StandardFunctionProps, InfluxColors, ComponentSize } from '../../Types';
import './TextBlock.scss';
export interface TextBlockProps extends StandardFunctionProps {
    /** Contents of text block */
    text: string;
    /** Sizing of text block, should be the same as the adjacent form elements */
    size?: ComponentSize;
    /** Background color of text block */
    backgroundColor?: InfluxColors | string;
    /** Color of text, leave blank to have the text color computed for optimal contrast from the background */
    textColor?: InfluxColors | string;
    /** Use monospace font instead of default */
    monospace?: boolean;
}
export type TextBlockRef = HTMLDivElement;
export declare const TextBlock: React.ForwardRefExoticComponent<TextBlockProps & React.RefAttributes<HTMLDivElement>>;
