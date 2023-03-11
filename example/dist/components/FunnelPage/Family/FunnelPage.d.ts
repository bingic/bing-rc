import React, { CSSProperties } from 'react';
import './FunnelPage.scss';
import { InfluxColors, StandardFunctionProps } from '../../../Types';
export interface FunnelPageProps extends StandardFunctionProps {
    /** Places a logo in the top left corner */
    logo?: JSX.Element;
    /** Primary page background color */
    backgroundColor?: InfluxColors | string;
    /** First background accent color */
    accentColorA?: InfluxColors | string;
    /** Second background accent color */
    accentColorB?: InfluxColors | string;
    /** Control inline styles of the outermost elemment */
    pageStyle?: CSSProperties;
    /** Renders a graphic in the funnel page */
    enableGraphic?: boolean;
}
export type FunnelPageRef = HTMLDivElement;
export declare const FunnelPageRoot: React.ForwardRefExoticComponent<FunnelPageProps & React.RefAttributes<HTMLDivElement>>;
