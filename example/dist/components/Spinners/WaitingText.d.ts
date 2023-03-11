import React from 'react';
import './WaitingText.scss';
import { StandardFunctionProps } from '../../Types';
export interface WaitingTextProps extends StandardFunctionProps {
    /** Text to be displayed */
    text: string;
}
export type WaitingTextRef = HTMLDivElement;
export declare const WaitingText: React.ForwardRefExoticComponent<WaitingTextProps & React.RefAttributes<HTMLDivElement>>;
