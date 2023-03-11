import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../Types';
import './InfluxDataLogo.scss';
export interface InfluxDataLogoProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
    /** Remove 'Act in time' from the logo */
    simplified?: boolean;
}
export type InfluxDataLogoRef = SVGSVGElement;
export declare const InfluxDataLogo: React.ForwardRefExoticComponent<InfluxDataLogoProps & React.RefAttributes<SVGSVGElement>>;
