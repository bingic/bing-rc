import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface EnterpriseProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type EnterpriseRef = SVGSVGElement;
export declare const Enterprise: React.ForwardRefExoticComponent<EnterpriseProps & React.RefAttributes<SVGSVGElement>>;
