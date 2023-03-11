import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PageControlBarProps extends StandardFunctionProps {
    /** Allows the control bar to fill the width of the screen */
    fullWidth: boolean;
    /** Controls the gutters (left and right margins) */
    gutters?: ComponentSize;
}
export type PageControlBarRef = HTMLDivElement;
export declare const PageControlBar: React.ForwardRefExoticComponent<PageControlBarProps & React.RefAttributes<HTMLDivElement>>;
