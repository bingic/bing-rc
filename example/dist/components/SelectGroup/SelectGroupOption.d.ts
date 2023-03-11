import React, { RefObject, KeyboardEvent } from 'react';
import { StandardFunctionProps, InputToggleType, Omit } from '../../Types';
export interface SelectGroupOptionProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for this radio button */
    id: string;
    /** Toggles radio button active state */
    active: boolean;
    /** Input value of the selected radio button */
    value: any;
    /** Keyboard control tab order  */
    tabIndex?: number;
    /** Used to group toggles together in a form */
    name?: string;
    /** Function to be called on radio button click */
    onClick: (value: any) => void;
    /** Function to be called on key up */
    onKeyUp?: (e: KeyboardEvent<HTMLLabelElement>) => void;
    /** Text to be displayed on hover tooltip */
    titleText?: string;
    /** Prevents the user from interacting with this component */
    disabled?: boolean;
    /** Text to be displayed on hover tooltip when radio button is disabled */
    disabledTitleText?: string;
    /** Choose either "SelectGroup" or "Checkbox" */
    type?: InputToggleType;
    /** Refers to the visible element rather than the hidden input that ref refers to */
    containerRef?: RefObject<SelectGroupOptionContainerRef>;
}
export type SelectGroupOptionRef = HTMLInputElement;
export type SelectGroupOptionContainerRef = HTMLLabelElement;
export declare const SelectGroupOption: React.ForwardRefExoticComponent<SelectGroupOptionProps & React.RefAttributes<HTMLInputElement>>;
