import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface OverlayContainerProps extends StandardFunctionProps {
    /** Pixel width maximum for overlay */
    maxWidth?: number;
    /** Margins on all sides of overlay */
    margin?: ComponentSize;
    fullScreen?: boolean;
}
export type OverlayContainerRef = HTMLDivElement;
export declare const OverlayContainer: React.ForwardRefExoticComponent<OverlayContainerProps & React.RefAttributes<HTMLDivElement>>;
