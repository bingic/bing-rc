import React from 'react';
import { StandardFunctionProps, ComponentStatus, ComponentSize } from '../../Types';
import './StatusIndicator.scss';
export interface StatusIndicatorProps extends StandardFunctionProps {
    /** The status to indicate */
    status: ComponentStatus;
    /** Renders a shadow beneath the indicator for increased legibility */
    shadow?: boolean;
    /** Controls the size of the indicator, this should match the size of the associated input */
    size?: ComponentSize;
}
export type StatusIndicatorRef = HTMLDivElement;
export declare const StatusIndicator: React.ForwardRefExoticComponent<StatusIndicatorProps & React.RefAttributes<HTMLDivElement>>;
