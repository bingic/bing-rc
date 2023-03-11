import React from 'react';
import './Table.scss';
import { StandardFunctionProps, ComponentSize, BorderType } from '../../Types';
export interface TableProps extends StandardFunctionProps {
    /** Padding inside every cell in the table */
    cellPadding?: ComponentSize;
    /** Font size of table elements */
    fontSize?: ComponentSize;
    /** Controls the appearance of borders in the table */
    borders?: BorderType;
    /** Controls coloration pattern of rows, useful for improving legibility on dense tables */
    striped?: boolean;
    /** Highlights a row on hover, useful for improving legibility on dense tables */
    highlight?: boolean;
}
export type TableRef = HTMLTableElement;
export declare const TableRoot: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
