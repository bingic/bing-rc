import React, { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { ComponentStatus, ComponentSize, AutoComplete, StandardFunctionProps, Wrap } from '../../Types';
import './TextArea.scss';
export interface TextAreaProps extends StandardFunctionProps {
    /** TextArea Component size */
    size?: ComponentSize;
    /** TextArea status state */
    status?: ComponentStatus;
    /** Function to be called on field value change */
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /** Function to be called on focus loss */
    onBlur?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
    /** Function to be called on focus gain */
    onFocus?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
    /** Function to be called on key press */
    onKeyPress?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /** Function to be called on key up */
    onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /** Function to be called on key down */
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /** Allows or disallows browser autocomplete functionality */
    autocomplete?: AutoComplete;
    /** Whether or not the input receives autofocus when mounted */
    autoFocus?: boolean;
    /** Associates the text area with a form even if outside the form */
    form?: string;
    /** Maximum string length for input value */
    maxLength?: number;
    /** Minimum string length for input value */
    minLength?: number;
    /** TextArea field name attribute */
    name?: string;
    /** Placeholder text when no value is present */
    placeholder?: string;
    /** Toggles read-only state of text area */
    readOnly?: boolean;
    /** Specified text area as a required field */
    required?: boolean;
    /** Sets width in columns */
    cols?: number;
    /** sets height in rows */
    rows?: number;
    /** Allows or disallows browser spellcheck functionality */
    spellCheck?: boolean;
    /** Sets text wrap */
    wrap?: Wrap;
    /** TextArea field value to be updated with 'on X' functions */
    value?: string;
    /** Container ref */
    containerRef?: RefObject<TextAreaContainerRef>;
    /** Use a monospace font */
    monospace?: boolean;
}
export type TextAreaRef = HTMLTextAreaElement;
export type TextAreaContainerRef = HTMLDivElement;
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
