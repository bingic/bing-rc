import React, { CSSProperties } from 'react';
import { Gradients, Orientation, StandardFunctionProps } from '../../Types';
export interface DraggableResizerHandleProps extends StandardFunctionProps {
    /** Enables a 0.0 direction (Left/Up) Collapse button */
    isCollapsibleToLower?: boolean;
    /** Enables a 1.0 direction (Right/Down) Collapse Button */
    isCollapsibleToUpper?: boolean;
    /** Function that updates panel positions after collapsing */
    onCollapseButtonClick: (direction: number, dragIndex: number) => void;
    /** Gets passed a function by being a child of DraggableResizer */
    onStartDrag?: (dragIndex: number) => void;
    /** Gets passed a value by being a child of DraggableResizer */
    dragging?: boolean;
    /** Gets passed a value by being a child of DraggableResizer */
    dragIndex?: number;
    /** Gradient theme for handle */
    gradient: Gradients;
    /** Orientation of handle */
    orientation: Orientation;
    handleBarStyle?: CSSProperties;
    handleBackgroundStyle?: CSSProperties;
}
export type DraggableResizerHandleRef = HTMLDivElement;
export declare const DraggableResizerHandle: React.ForwardRefExoticComponent<DraggableResizerHandleProps & React.RefAttributes<HTMLDivElement>>;
