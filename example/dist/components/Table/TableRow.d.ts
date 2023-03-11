import React from 'react';
import { StandardFunctionProps, ComponentColor } from '../../Types';
export interface TableRowProps extends StandardFunctionProps {
    /** Controls coloration of the row, useful for showing a certain state */
    color?: ComponentColor;
}
export type TableRowRef = HTMLTableRowElement;
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
