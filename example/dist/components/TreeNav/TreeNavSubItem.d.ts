import { FunctionComponent } from 'react';
import { StandardFunctionProps, Omit, RenderLinkElement } from '../../Types';
export interface TreeNavSubItemProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for nav sub item */
    id: string;
    /** Controls highlighting of the menu item */
    active?: boolean;
    /** Label for item */
    label: string;
    /** Click behavior */
    onClick?: (id: string) => void;
    /** Optional link element. Will override onClick prop */
    linkElement?: RenderLinkElement;
}
export declare const TreeNavSubItem: FunctionComponent<TreeNavSubItemProps>;
