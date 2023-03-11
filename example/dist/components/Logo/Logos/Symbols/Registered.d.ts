import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface RegisteredProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type RegisteredRef = SVGSVGElement;
export declare const Registered: React.ForwardRefExoticComponent<RegisteredProps & React.RefAttributes<SVGSVGElement>>;
