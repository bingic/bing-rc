import React, { MouseEvent } from 'react';
import { StandardFunctionProps } from '../../../Types';
export interface RightClickMenuItemProps extends StandardFunctionProps {
    /** Click handler */
    onClick: (value?: any, e?: MouseEvent<HTMLLIElement>) => void;
    /** Disabled */
    disabled?: boolean;
    /** Optional return value */
    value?: any;
}
export type RightClickMenuItemRef = HTMLLIElement;
export declare const RightClickMenuItem: React.ForwardRefExoticComponent<RightClickMenuItemProps & React.RefAttributes<HTMLLIElement>>;
