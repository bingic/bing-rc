import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface OverlayHeaderProps extends StandardFunctionProps {
    /** Title of the Overlay */
    title: string;
    /** Passing a function into this prop will cause the Dismiss "X" to render in the header */
    onDismiss?: () => void;
    /** Wrap text */
    wrapText?: boolean;
}
export type OverlayHeaderRef = HTMLDivElement;
export declare const OverlayHeader: React.ForwardRefExoticComponent<OverlayHeaderProps & React.RefAttributes<HTMLDivElement>>;
