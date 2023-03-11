import React, { RefObject } from 'react';
import { RightClickMenuRef } from './RightClickMenu';
import './RightClick.scss';
import { ComponentColor, StandardFunctionProps } from '../../../Types';
export interface RightClickProps extends StandardFunctionProps {
    /** RightClick menu color */
    color?: ComponentColor;
    /** Callback function fired when state changes to "show" */
    onShow?: () => void;
    /** Callback function fired when state changes to "hide" */
    onHide?: () => void;
    /** Prevents the right click menu from firing */
    disabled?: boolean;
    /** Reference to trigger element */
    triggerRef: RefObject<any>;
}
export type RightClickRef = RightClickMenuRef;
export declare const RightClickRoot: React.ForwardRefExoticComponent<RightClickProps & React.RefAttributes<HTMLUListElement>>;
