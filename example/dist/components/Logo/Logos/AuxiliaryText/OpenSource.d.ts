import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface OpenSourceProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type OpenSourceRef = SVGSVGElement;
export declare const OpenSource: React.ForwardRefExoticComponent<OpenSourceProps & React.RefAttributes<SVGSVGElement>>;
