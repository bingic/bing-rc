import React from 'react';
import { StandardFunctionProps, Omit, ComponentColor, RenderLinkElement } from '../../Types';
export interface TreeNavHeaderProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for nav item */
    id: string;
    /** Icon or Image to appear in the square */
    icon?: JSX.Element;
    /** Label to appear to the right of the icon, only visible when expanded */
    label: JSX.Element;
    /** Coloration of the Header */
    color?: ComponentColor;
    /** Controls state of item */
    active?: boolean;
    /** Click behavior */
    onClick?: (id: string) => void;
    /** Optional link element. Will override onClick prop */
    linkElement?: RenderLinkElement;
}
export type TreeNavHeaderRef = HTMLButtonElement;
export declare const TreeNavHeader: React.ForwardRefExoticComponent<TreeNavHeaderProps & React.RefAttributes<HTMLButtonElement>>;
