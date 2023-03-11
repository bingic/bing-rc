import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FormLabelProps extends StandardFunctionProps {
    /** Label Text */
    label: string;
    /** Whether this field is required to submit form, adds red required asterisk */
    required?: boolean;
    /** Useful for associating a label with an input */
    htmlFor?: string;
}
export type FormLabelRef = HTMLDivElement & HTMLLabelElement;
export declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<FormLabelRef>>;
