import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface TreeNavUserProps extends StandardFunctionProps {
    /** Username, only visible when expanded */
    username: string;
    /** User's currently active team */
    team?: string;
}
export type TreeNavUserRef = HTMLButtonElement;
export declare const TreeNavUser: React.ForwardRefExoticComponent<TreeNavUserProps & React.RefAttributes<HTMLButtonElement>>;
