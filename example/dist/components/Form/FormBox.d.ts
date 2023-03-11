import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FormBoxProps extends StandardFunctionProps {
}
export type FormBoxRef = HTMLDivElement;
export declare const FormBox: React.ForwardRefExoticComponent<FormBoxProps & React.RefAttributes<HTMLDivElement>>;
