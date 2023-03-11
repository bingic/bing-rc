import React from 'react';
import { InfluxColors, Gradients, StandardFunctionProps } from '../../Types';
export interface OverlayMaskProps extends StandardFunctionProps {
    /** Optional gradient theme of panel*/
    gradient?: Gradients;
    /** Optional background color of panel, supercedes gradient prop  */
    backgroundColor?: InfluxColors | string;
}
export type OverlayMaskRef = HTMLDivElement;
export declare const OverlayMask: React.ForwardRefExoticComponent<OverlayMaskProps & React.RefAttributes<HTMLDivElement>>;
