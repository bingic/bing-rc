import React from 'react';
import { ComponentSize, StandardFunctionProps } from '../../Types';
import './EmptyState.scss';
export interface EmptyStateProps extends StandardFunctionProps {
    /** Controls vertical padding in container and font size of children */
    size?: ComponentSize;
}
export type EmptyStateRef = HTMLDivElement;
export declare const EmptyStateRoot: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
