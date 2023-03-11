import React from 'react';
import { StandardFunctionProps, Alignment, VerticalAlignment } from '../../Types';
export interface TableCellProps extends StandardFunctionProps {
    /** How many columns this cell should take up */
    colSpan?: number;
    /** Horizontal alignment of contents */
    horizontalAlignment?: Alignment;
    /** Vertical alignment of contents */
    verticalAlignment?: VerticalAlignment;
}
export type TableCellRef = HTMLTableDataCellElement;
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
