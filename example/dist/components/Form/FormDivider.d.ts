import React from 'react';
import { InfluxColors, StandardFunctionProps } from '../../Types';
export interface FormDividerProps extends StandardFunctionProps {
    /** Optional coloration for horizontal rule in divider */
    lineColor?: InfluxColors | string;
}
export type FormDividerRef = HTMLDivElement;
export declare const FormDivider: React.ForwardRefExoticComponent<FormDividerProps & React.RefAttributes<HTMLDivElement>>;
