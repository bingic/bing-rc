import React from 'react';
import { Gradients, InfluxColors, StandardFunctionProps } from '../../Types';
import './GradientBox.scss';
export interface GradientBoxProps extends StandardFunctionProps {
    /** Controls the border gradient color */
    borderGradient?: Gradients;
    /** Controls the border gradient color */
    borderColor?: InfluxColors | string;
}
export type GradientBoxRef = HTMLDivElement;
export declare const GradientBox: React.ForwardRefExoticComponent<GradientBoxProps & React.RefAttributes<HTMLDivElement>>;
