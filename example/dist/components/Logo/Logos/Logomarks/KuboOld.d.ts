import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface KuboOldProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
    centered: boolean;
}
export type KuboOldRef = SVGSVGElement;
export declare const KuboOld: React.ForwardRefExoticComponent<KuboOldProps & React.RefAttributes<SVGSVGElement>>;
