import React from 'react';
import { StandardFunctionProps, InfluxColors, LogoAuxiliaryText, LogoBaseText, LogoMarks, LogoSymbols } from '../../Types';
import './InfluxLogo.scss';
export interface InfluxLogoProps extends StandardFunctionProps {
    /** Coloration of the SVG image */
    fill?: InfluxColors | string;
    /** Kubo, KuboOld  */
    logoMark?: LogoMarks | string;
    /** InfluxData, InfluxDb, Telegraf  */
    baseText?: LogoBaseText | string;
    /** Cloud, Enterprise, Open Source  */
    auxiliaryText?: LogoAuxiliaryText | string;
    /** Registered, Trademark  */
    symbol?: LogoSymbols | string;
    /** Enables a centered logo on its own line  */
    centeredLogo: boolean;
}
export type InfluxLogoRef = HTMLDivElement;
export declare const InfluxLogo: React.ForwardRefExoticComponent<InfluxLogoProps & React.RefAttributes<HTMLDivElement>>;
