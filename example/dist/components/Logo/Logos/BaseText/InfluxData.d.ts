import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface InfluxDataProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type InfluxDataRef = SVGSVGElement;
export declare const InfluxData: React.ForwardRefExoticComponent<InfluxDataProps & React.RefAttributes<SVGSVGElement>>;
