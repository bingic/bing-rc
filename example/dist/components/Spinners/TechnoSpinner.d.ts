import React from 'react';
import { ComponentSize, StandardFunctionProps } from '../../Types';
import './TechnoSpinner.scss';
export interface TechnoSpinnerProps extends StandardFunctionProps {
    /** Diameter of spinner circle */
    diameterPixels?: number;
    /** Width of spinner stroke */
    strokeWidth?: ComponentSize;
}
export type TechnoSpinnerRef = HTMLDivElement;
export declare const TechnoSpinner: React.ForwardRefExoticComponent<TechnoSpinnerProps & React.RefAttributes<HTMLDivElement>>;
