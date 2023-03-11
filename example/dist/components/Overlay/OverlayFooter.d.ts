import React from 'react';
import { JustifyContent, StandardFunctionProps } from '../../Types';
export interface OverlayFooterProps extends StandardFunctionProps {
    justifyContent?: JustifyContent;
}
export type OverlayFooterRef = HTMLDivElement;
export declare const OverlayFooter: React.ForwardRefExoticComponent<OverlayFooterProps & React.RefAttributes<HTMLDivElement>>;
