import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PageContentsProps extends StandardFunctionProps {
    /** Allows the page contents to fill the width of the screen */
    fullWidth?: boolean;
    /** Allows contents to scroll on overflow */
    scrollable?: boolean;
    /** Scrollbar size */
    scrollbarSize?: ComponentSize;
    /** If scrollable is true, this toggles whether the scrollbar is always visible */
    autoHideScrollbar?: boolean;
    /** Controls the gutters (left and right margins) */
    gutters?: ComponentSize;
}
export type PageContentsRef = HTMLDivElement;
export declare const PageContents: React.ForwardRefExoticComponent<PageContentsProps & React.RefAttributes<HTMLDivElement>>;
