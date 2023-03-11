import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export type InfluxDbRef = SVGSVGElement;
export interface InfluxDbProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export declare const InfluxDb: React.ForwardRefExoticComponent<InfluxDbProps & React.RefAttributes<SVGSVGElement>>;
