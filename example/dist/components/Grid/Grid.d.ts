import React from 'react';
import { StandardFunctionProps } from '../../Types';
import './Grid.scss';
export interface GridProps extends StandardFunctionProps {
}
export type GridRef = HTMLDivElement;
export declare const GridRoot: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
