import React, { CSSProperties, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import './Input.scss';
import { AutoComplete, ComponentSize, ComponentStatus, IconFont, InputType, StandardFunctionProps } from '../../Types';
export interface InputProps extends StandardFunctionProps {
    /** Minimum value for number & range types */
    min?: number;
    /** Maximum value for number & range types */
    max?: number;
    /** Stepping interval granularity for range type */
    step?: number;
    /** Determines whether checkbox is checked */
    checked?: boolean;
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
    /** Input type (text, number, password, email, checkbox)  */
    type?: InputType;
    /** Input field name attribute */
    name?: string;
    /** Input field value to be updated with 'on X' functions */
    value?: string | number;
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
    /** CSS attributes for the input element */
    inputStyle?: CSSProperties;
    /** For use within a form, marks the input as required */
    required?: boolean;
    /**
     * Function to be called when the input field is cleared;
     * if not included then the 'x' clear button will NOT be added
     */
    onClear?: () => void;
    /** Pass in a RegEx matcher for best results */
    pattern?: string;
    /** Pass through for container ref */
    containerRef?: RefObject<InputContainerRef>;
    /** Render input using monospace font */
    monospace?: boolean;
    /** Color preview to be displayed to the left of text.
     * Value should be in #000000 format.
     * If both icon and colorPreview props are set, icon will take priority */
    colorPreview?: string;
}
export type InputRef = HTMLInputElement;
export type InputContainerRef = HTMLDivElement;
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
