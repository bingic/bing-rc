import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface TrademarkProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type TrademarkRef = SVGSVGElement;
export declare const Trademark: React.ForwardRefExoticComponent<TrademarkProps & React.RefAttributes<SVGSVGElement>>;
