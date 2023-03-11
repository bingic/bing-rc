import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface KuboProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
    centered: boolean;
}
export type KuboRef = SVGSVGElement;
export declare const Kubo: React.ForwardRefExoticComponent<KuboProps & React.RefAttributes<SVGSVGElement>>;
