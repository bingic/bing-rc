import React, { MouseEvent } from 'react';
import { StandardFunctionProps } from '../../Types';
export interface FlexBoxChildProps extends StandardFunctionProps {
    /** Optional fixed width of element */
    basis?: number;
    /** Maximumn proportional width to grow until */
    grow?: number;
    /** Minimum proportional width to shrink until */
    shrink?: number;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
export type FlexBoxChildRef = HTMLDivElement;
export declare const FlexBoxChild: React.ForwardRefExoticComponent<FlexBoxChildProps & React.RefAttributes<HTMLDivElement>>;
