import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../Types';
import './InfluxDBCloudLogo.scss';
export interface InfluxDBCloudLogoProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
    /** Controls rendering of optional "cloud" suffix */
    cloud: boolean;
}
export type InfluxDBCloudLogoRef = SVGSVGElement;
export declare const InfluxDBCloudLogo: React.ForwardRefExoticComponent<InfluxDBCloudLogoProps & React.RefAttributes<SVGSVGElement>>;
