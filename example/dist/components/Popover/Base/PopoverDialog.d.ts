import React, { RefObject, MouseEvent } from 'react';
import { Appearance, ComponentColor, PopoverPosition, StandardFunctionProps } from '../../../Types';
export interface PopoverDialogProps extends StandardFunctionProps {
    /** Bounding rectangle of trigger element */
    triggerRef: RefObject<any>;
    /** Pixel distance between trigger and popover dialog */
    distanceFromTrigger: number;
    /** Where to position the popover relative to the trigger (assuming it fits there) */
    position: PopoverPosition;
    /** Popover dialog color */
    color: ComponentColor;
    /** Means of applying color to popover */
    appearance?: Appearance;
    /** Popover dialog contents */
    contents: JSX.Element;
    /** Handles clicks detected outside the popover dialog element */
    onClickOutside: (e: MouseEvent) => void;
    /** Handles mouseleave events */
    onMouseLeave: (e: MouseEvent) => void;
    /** Size of caret (triangle) that points at the trigger */
    caretSize: number;
    /** Adds reasonable styles to popover dialog contents so you do not have to */
    enableDefaultStyles: boolean;
    /** Allows the popover to dismiss itself when the trigger is no longer in view */
    onHide: () => void;
    /** This keeps the Popover visible no matter what */
    visible?: boolean;
}
export type PopoverDialogRef = HTMLDivElement;
export declare const PopoverDialog: React.ForwardRefExoticComponent<PopoverDialogProps & React.RefAttributes<HTMLDivElement>>;
