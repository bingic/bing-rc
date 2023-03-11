import React from 'react';
import { Columns, StandardFunctionProps } from '../../Types';
export interface GridColumnProps extends StandardFunctionProps {
    /** Number of columns spanned when viewport width is less than 750px */
    widthXS?: Columns;
    /** Number of columns spanned when viewport width is greater than 750px */
    widthSM?: Columns;
    /** Number of columns spanned when viewport width is greater than 1080px */
    widthMD?: Columns;
    /** Number of columns spanned when viewport width is greater than 1500px */
    widthLG?: Columns;
    /** Number of columns shifted when viewport width is less than 750px */
    offsetXS?: Columns;
    /** Number of columns shifted when viewport width is greater than 750px */
    offsetSM?: Columns;
    /** Number of columns shifted when viewport width is greater than 1080px */
    offsetMD?: Columns;
    /** Number of columns shifted when viewport width is greater than 1500px */
    offsetLG?: Columns;
}
export type GridColumnRef = HTMLDivElement;
export declare const GridColumn: React.ForwardRefExoticComponent<GridColumnProps & React.RefAttributes<HTMLDivElement>>;
