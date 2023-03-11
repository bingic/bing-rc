import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface GridRowProps extends StandardFunctionProps {
}
export type GridRowRef = HTMLDivElement;
export declare const GridRow: React.ForwardRefExoticComponent<GridRowProps & React.RefAttributes<HTMLDivElement>>;
