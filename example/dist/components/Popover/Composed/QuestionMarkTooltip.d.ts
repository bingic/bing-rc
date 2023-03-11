import React, { CSSProperties } from 'react';
import { StandardFunctionProps, ComponentColor } from '../../../Types';
import './QuestionMarkTooltip.scss';
export interface QuestionMarkTooltipProps extends StandardFunctionProps {
    /** Controls the size of the question mark circle */
    diameter?: number;
    /** Contents to display in tooltip */
    tooltipContents: JSX.Element | string;
    /** Coloration of tooltip and question mark circle */
    color?: ComponentColor;
    /** Useful for customizing the tooltip itself */
    tooltipStyle?: CSSProperties;
}
export type QuestionMarkTooltipRef = HTMLSpanElement;
export declare const QuestionMarkTooltip: React.ForwardRefExoticComponent<QuestionMarkTooltipProps & React.RefAttributes<HTMLSpanElement>>;
