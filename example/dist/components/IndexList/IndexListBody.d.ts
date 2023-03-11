import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface IndexListBodyProps extends StandardFunctionProps {
    /** Rendered when no children are passed in */
    emptyState: JSX.Element;
    /** Used to ensure the empty state takes up the full width of the table */
    columnCount: number;
}
export type IndexListBodyRef = HTMLTableSectionElement;
export declare const IndexListBody: React.ForwardRefExoticComponent<IndexListBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
