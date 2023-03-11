import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface ListDividerProps extends StandardFunctionProps {
    /** Text to be displayed on divider, a line will be displayed if no text is provided */
    text?: string;
    /** Size of this component */
    size?: ComponentSize;
}
export type ListDividerRef = HTMLDivElement;
export declare const ListDivider: React.ForwardRefExoticComponent<ListDividerProps & React.RefAttributes<HTMLDivElement>>;
