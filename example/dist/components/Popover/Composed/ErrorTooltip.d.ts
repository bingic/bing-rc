import React, { CSSProperties } from 'react';
import { StandardFunctionProps, PopoverPosition } from '../../../Types';
import './ErrorTooltip.scss';
export interface ErrorTooltipProps extends StandardFunctionProps {
    /** Controls the size of the question mark circle */
    diameter?: number;
    /** Contents to display in tooltip */
    tooltipContents: JSX.Element | string;
    /** Useful for customizing the tooltip itself */
    tooltipStyle?: CSSProperties;
    /** Useful for defining where tooltip should appear relative to the icon */
    position?: PopoverPosition;
}
export type ErrorTooltipRef = HTMLSpanElement;
export declare const ErrorTooltip: React.ForwardRefExoticComponent<ErrorTooltipProps & React.RefAttributes<HTMLSpanElement>>;
