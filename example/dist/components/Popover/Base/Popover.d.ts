import React, { RefObject } from 'react';
import './Popover.scss';
import { Appearance, ComponentColor, PopoverPosition, PopoverInteraction, StandardFunctionProps } from '../../../Types';
import { PopoverDialogRef } from './PopoverDialog';
export interface PopoverProps extends StandardFunctionProps {
    /** Popover dialog color */
    color?: ComponentColor;
    /** Popover dialog contents */
    contents: (onHide?: () => void) => JSX.Element;
    /** Type of interaction to show the popover dialog */
    showEvent?: PopoverInteraction;
    /** Type of interaction to hide the popover dialog */
    hideEvent?: PopoverInteraction;
    /** Callback function fired when state changes to "show" */
    onShow?: () => void;
    /** Callback function fired when state changes to "hide" */
    onHide?: () => void;
    /** Pixel distance between trigger and popover dialog */
    distanceFromTrigger?: number;
    /** Size of caret (triangle) that points at the trigger */
    caretSize?: number;
    /** Where to position the popover relative to the trigger (assuming it fits there) */
    position?: PopoverPosition;
    /** Means of applying color to popover */
    appearance?: Appearance;
    /** For external control of the popover state, overrides escape key behavior  */
    visible?: boolean;
    /** Disables the popover's show interaction */
    disabled?: boolean;
    /** Reference to trigger element */
    triggerRef: RefObject<any>;
    /** Adds reasonable styles to popover dialog contents so you do not have to */
    enableDefaultStyles?: boolean;
    /** Ensures the popover appears above all other portal elements */
    forceToTop?: boolean;
}
export type PopoverRef = PopoverDialogRef;
export declare const PopoverRoot: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
