import React, { MouseEvent } from 'react';
import { StandardFunctionProps, InfluxColors, ComponentSize, Gradients } from '../../Types';
export interface ListItemSharedProps {
    /** Whether or not the item should have selected styling */
    selected?: boolean;
    /** Size of this component */
    size?: ComponentSize;
}
export interface ListItemContextProps extends ListItemSharedProps {
    listItemContrastColor?: string;
    listItemBackgroundColor?: InfluxColors | string;
    listItemGradient?: Gradients;
}
type CombinedListItemProps = ListItemSharedProps & StandardFunctionProps;
export interface ListItemProps extends CombinedListItemProps {
    /** Value to be returned via the onClick function */
    value?: any;
    /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
    onClick?: (value?: any, e?: MouseEvent<ListItemRef>) => void;
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
    /** Title attribute */
    title?: string;
    /** Prevents any interaction with this element, including the onClick function */
    disabled?: boolean;
    /** Pass in an <a> or <Link> element as an alternative to onClick */
    linkElement?: JSX.Element;
    /** Colorizes the background of the list item in hover and selected state */
    backgroundColor?: InfluxColors | string;
    /** Overrides backgroundColor, fills background with gradient */
    gradient?: Gradients;
}
export type ListItemRef = HTMLButtonElement;
export declare const ListItemContext: React.Context<ListItemContextProps>;
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLButtonElement>>;
export {};
