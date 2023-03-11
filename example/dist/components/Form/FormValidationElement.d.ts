import React from 'react';
import { StandardFunctionProps, ComponentStatus, ValidationFunction } from '../../Types';
export interface FormValidationElementProps extends StandardFunctionProps {
    /** Child components */
    children: (status: ComponentStatus) => React.ReactNode;
    /** Function used for validation check */
    validationFunc: ValidationFunction;
    /** Function called when validation status */
    onStatusChange?: (newStatus: ComponentStatus) => void;
    /** Element to be displayed along with label */
    labelAddOn?: () => JSX.Element;
    /** Label Text */
    label: string;
    /** Field value */
    value: string;
    /** Input instruction text */
    helpText?: string;
    /** Whether this field is required to submit form, adds red required asterisk */
    required?: boolean;
    /** Useful for associating a label with an input */
    htmlFor?: string;
    /** Pre-validation mode ( Validation happens ) */
    prevalidate?: boolean;
}
export type FormValidationElementRef = HTMLLabelElement;
export declare const FormValidationElement: React.ForwardRefExoticComponent<FormValidationElementProps & React.RefAttributes<HTMLLabelElement>>;
