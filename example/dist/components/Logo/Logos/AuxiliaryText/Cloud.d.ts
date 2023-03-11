import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface CloudProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type CloudRef = SVGSVGElement;
export declare const Cloud: React.ForwardRefExoticComponent<CloudProps & React.RefAttributes<SVGSVGElement>>;
