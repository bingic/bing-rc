import React from 'react';
import { StandardFunctionProps, AutoComplete, EncType, Method } from '../../Types';
import './Form.scss';
export interface FormProps extends StandardFunctionProps {
    /** Form submit URI */
    action?: string;
    /** A space-delimited list of character encodings. */
    acceptCharset?: string;
    /** Allows or disallows browser autocomplete functionality */
    autoComplete?: AutoComplete;
    /** Type of content to be submitted to the server */
    encType?: EncType;
    /** HTTP Method to be used on form submit */
    method?: Method;
    /** Input field name attribute */
    name?: string;
    /** Enable or disable form validation */
    noValidate?: boolean;
    /** Function to be called on form submit */
    onSubmit?: (e: React.FormEvent) => void;
    /** Context name or keyword */
    target?: string;
    /** If true prevents default event during onSubmit */
    preventDefault?: boolean;
}
export type FormRef = HTMLFormElement;
export declare const FormRoot: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
