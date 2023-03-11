import React from 'react';
import { Alignment, StandardFunctionProps } from '../../Types';
export interface IndexListRowCellProps extends StandardFunctionProps {
    /** Text alignment of contents */
    alignment?: Alignment;
    /** If true the contents of this cell will be hidden until the containing row is hovered */
    revealOnHover?: boolean;
}
export type IndexListRowCellRef = HTMLTableDataCellElement;
export declare const IndexListRowCell: React.ForwardRefExoticComponent<IndexListRowCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
