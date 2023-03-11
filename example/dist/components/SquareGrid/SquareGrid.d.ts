import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
import './SquareGrid.scss';
export interface SquareGridProps extends StandardFunctionProps {
    /** Approximate size of each card, must be in px, rem, or em */
    cardSize: string;
    /** Gap between cards */
    gutter?: ComponentSize;
}
export type SquareGridRef = HTMLDivElement;
export declare const SquareGridRoot: React.ForwardRefExoticComponent<SquareGridProps & React.RefAttributes<HTMLDivElement>>;
