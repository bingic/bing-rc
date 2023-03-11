import React from 'react';
import './Alert.scss';
import { ComponentColor, IconFont, StandardFunctionProps } from '../../Types';
interface Props extends StandardFunctionProps {
    /** Alert color */
    color: ComponentColor;
    /** Icon to be displayed to the left of text */
    icon?: IconFont;
}
export type AlertRef = HTMLDivElement;
export declare const Alert: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
