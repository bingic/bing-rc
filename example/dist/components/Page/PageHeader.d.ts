import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PageHeaderProps extends StandardFunctionProps {
    /** Allows the control bar to fill the width of the screen */
    fullWidth: boolean;
    /** Controls the gutters (left and right margins) */
    gutters?: ComponentSize;
}
export type PageHeaderRef = HTMLDivElement;
export declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLDivElement>>;
