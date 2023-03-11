import React from 'react';
import { StandardFunctionProps, Alignment, VerticalAlignment } from '../../Types';
export interface TableHeaderCellProps extends StandardFunctionProps {
    /** How many columns this cell should take up */
    colSpan?: number;
    /** Horizontal alignment of contents */
    horizontalAlignment?: Alignment;
    /** Vertical alignment of contents */
    verticalAlignment?: VerticalAlignment;
}
export type TableHeaderCellRef = HTMLTableHeaderCellElement;
export declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
