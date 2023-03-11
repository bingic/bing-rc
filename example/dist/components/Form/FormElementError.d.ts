import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FormElementErrorProps extends StandardFunctionProps {
    /** Text to be displayed on error */
    message?: string;
}
export type FormElementErrorRef = HTMLSpanElement;
export declare const FormElementError: React.ForwardRefExoticComponent<FormElementErrorProps & React.RefAttributes<HTMLSpanElement>>;
