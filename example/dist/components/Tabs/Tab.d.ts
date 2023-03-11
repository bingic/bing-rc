import React from 'react';
import { StandardFunctionProps, RenderLinkElement } from '../../Types';
export interface TabProps extends StandardFunctionProps {
    /** Renders the tab highlighted */
    active: boolean;
    /** Unique identifier of tab */
    id: string;
    /** Text label of tab */
    text: string;
    /** Icon to appear left of the text label */
    icon?: JSX.Element;
    /** Function to call when tab is clicked, id of tab is passed in */
    onClick?: (id?: string) => void;
    /** If a function is passed in a dismiss button is rendered in the right of the tab */
    onDismiss?: (id?: string) => void;
    /** Optional link element. Will override onClick prop */
    linkElement?: RenderLinkElement;
}
export type TabRef = HTMLButtonElement;
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLButtonElement>>;
