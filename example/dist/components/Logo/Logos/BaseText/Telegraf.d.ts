import React from 'react';
import { StandardFunctionProps, InfluxColors } from '../../../../Types';
import '../../InfluxLogo.scss';
export interface TelegrafProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
}
export type TelegrafRef = SVGSVGElement;
export declare const Telegraf: React.ForwardRefExoticComponent<TelegrafProps & React.RefAttributes<SVGSVGElement>>;
