import React from 'react';
import { Alignment, Sort, StandardFunctionProps } from '../../Types';
export interface IndexListHeaderCellProps extends StandardFunctionProps {
    /** Can be a % or px */
    width: string;
    /** Text to display as column header */
    columnName?: string;
    /** Text alignment of column header */
    alignment?: Alignment;
    /** Controls appearance of sort indicator (arrow) */
    sort?: Sort;
    /** Unique identifier for use in managing sort state */
    sortKey?: string;
    /** Useful for triggering a change in sort state */
    onClick?: (nextSort: Sort, sortKey: string | undefined) => void;
}
export type IndexListHeaderCellRef = HTMLTableHeaderCellElement;
export declare const IndexListHeaderCell: React.ForwardRefExoticComponent<IndexListHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
