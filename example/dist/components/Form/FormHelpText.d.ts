import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FormHelpTextProps extends StandardFunctionProps {
    /** Input discription  or instruction text */
    text: string;
}
export type FormHelpTextRef = HTMLSpanElement;
export declare const FormHelpText: React.ForwardRefExoticComponent<FormHelpTextProps & React.RefAttributes<HTMLSpanElement>>;
