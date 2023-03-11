import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FormElementProps extends StandardFunctionProps {
    /** Label Text */
    label: string;
    /** Input instruction text */
    helpText?: string;
    /** Text to be displayed on error */
    errorMessage?: string;
    /** Element to be displayed along with label */
    labelAddOn?: () => JSX.Element;
    /** Whether this field is required to submit form, adds red required asterisk */
    required?: boolean;
    /** Useful for associating a label with an input */
    htmlFor?: string;
    /** ID for Error Message for Integration Tests */
    errorMessageTestId?: string;
}
export type FormElementRef = HTMLLabelElement & HTMLDivElement;
export declare const FormElement: React.ForwardRefExoticComponent<FormElementProps & React.RefAttributes<FormElementRef>>;
