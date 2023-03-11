import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import './VisibilityInput.scss';
import { StandardFunctionProps, ComponentSize, AutoComplete, ComponentStatus, IconFont } from '../../../Types';
export interface VisibilityInputProps extends StandardFunctionProps {
    /** Function to be called on field value change */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /** Function to be called on focus loss */
    onBlur?: (e?: ChangeEvent<HTMLInputElement>) => void;
    /** Function to be called on focus gain */
    onFocus?: (e?: ChangeEvent<HTMLInputElement>) => void;
    /** Function to be called on key press */
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Function to be called on key up */
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Function to be called on key down */
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Icon to be displayed to the left of text */
    icon?: IconFont;
    /** Maximum string length for input value */
    maxLength?: number;
    /** Keyboard control tab order  */
    tabIndex?: number;
    /** Input field name attribute */
    name?: string;
    /** Input field value to be updated with 'on X' functions */
    value?: string;
    /** Placeholder text when no value is present */
    placeholder?: string;
    /** Allows or disallows browser autocomplete functionality */
    autocomplete?: AutoComplete;
    /** Text to be displayed on hover tooltip */
    titleText?: string;
    /** Text to be displayed on hover tooltip when radio button is disabled */
    disabledTitleText?: string;
    /** Input Component size */
    size?: ComponentSize;
    /** Input status state */
    status?: ComponentStatus;
    /** Whether or not the input receives autofocus when mounted */
    autoFocus?: boolean;
    /** Allows or disallows browser spellcheck functionality */
    spellCheck?: boolean;
    /** For use within a form, marks the input as required */
    required?: boolean;
    /** Pass in a RegEx matcher for best results */
    pattern?: string;
    /** Toggle Visibility of text */
    visible?: boolean;
    /** Function to be called on button click */
    onToggleClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
export type VisibilityInputRef = HTMLInputElement;
export declare const VisibilityInput: React.ForwardRefExoticComponent<VisibilityInputProps & React.RefAttributes<HTMLInputElement>>;
