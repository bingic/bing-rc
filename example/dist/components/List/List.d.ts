import React, { RefObject, CSSProperties } from 'react';
import { StandardFunctionProps, InfluxColors, Gradients } from '../../Types';
import './List.scss';
export interface ListContextProps {
    listBackgroundColor?: InfluxColors | string;
    listGradient?: Gradients;
    listContrastColor?: InfluxColors | string;
}
export type ListItemRef = HTMLDivElement;
export declare const ListContext: React.Context<ListContextProps>;
export interface ListProps extends StandardFunctionProps {
    /** Disable scrolling horizontally */
    noScrollX?: boolean;
    /** Disable scrolling vertically */
    noScrollY?: boolean;
    /** Automatically scroll to selected item when dropdown is opened */
    scrollToSelected?: boolean;
    /** Pass through ref for contents element within scrollbars */
    contentsRef?: RefObject<ListContentsRef>;
    /** Useful for customizing appearance of the contents element within scrollbars */
    contentsStyle?: CSSProperties;
    /** Controls autoHide behavior of scrollbars within the menu */
    autoHideScrollbars?: boolean;
    /** Gradient start color */
    thumbStartColor?: string | InfluxColors;
    /** Gradient end color */
    thumbStopColor?: string | InfluxColors;
    /** Colorizes the background of the list */
    backgroundColor?: InfluxColors | string;
    /** Overrides backgroundColor, fills background with gradient */
    gradient?: Gradients;
    /** Pixel height after which the list will scroll */
    maxHeight?: string;
}
export type ListRef = HTMLDivElement;
export type ListContentsRef = HTMLDivElement;
export declare const ListRoot: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>;
