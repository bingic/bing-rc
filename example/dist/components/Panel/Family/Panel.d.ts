import React from 'react';
import { Gradients, InfluxColors, StandardFunctionProps, ComponentColor } from '../../../Types';
import './Panel.scss';
export interface PanelProps extends StandardFunctionProps {
    /** Optional gradient theme of panel, supercedes backgroundColor prop */
    gradient?: Gradients;
    /** Optional background color of panel */
    backgroundColor?: InfluxColors | string;
    /** If a function is passed in a dismiss button will appear on the Panel */
    onDismiss?: () => void;
    /** Applies to the dismiss button rendered when onDismiss is present */
    dismissButtonColor?: ComponentColor;
    /** Renders a border based on the background color or gradient */
    border?: boolean;
}
export type PanelRef = HTMLDivElement;
export declare const PanelRoot: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
