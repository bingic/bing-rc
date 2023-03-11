import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface DraggableResizerPanelProps extends StandardFunctionProps {
    /** Checks if the current panel is collapsible or not */
    isCollapsible?: boolean;
    /** Panel will not shrink past this size (experimental, not guaranteed to work) */
    minSizePixels?: number;
    /** Does not have a value initially, gets passed a value by being a child of DraggableResizer */
    sizePercent?: number;
}
export type DraggableResizerPanelRef = HTMLDivElement;
export declare const DraggableResizerPanel: React.ForwardRefExoticComponent<DraggableResizerPanelProps & React.RefAttributes<HTMLDivElement>>;
