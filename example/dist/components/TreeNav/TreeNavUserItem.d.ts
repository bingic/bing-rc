import { FunctionComponent } from 'react';
import { StandardFunctionProps, Omit, RenderLinkElement } from '../../Types';
export interface TreeNavUserItemProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for user item */
    id: string;
    /** Controls highlighting of the user item */
    active?: boolean;
    /** Label for item */
    label: string;
    /** Click behavior */
    onClick?: (id: string) => void;
    /** Optional link element. Will override onClick prop */
    linkElement?: RenderLinkElement;
}
export declare const TreeNavUserItem: FunctionComponent<TreeNavUserItemProps>;
