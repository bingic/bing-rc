import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface ListEmptyStateProps extends StandardFunctionProps {
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
    /** Size of this component */
    size?: ComponentSize;
}
export type ListEmptyStateRef = HTMLDivElement;
export declare const ListEmptyState: React.ForwardRefExoticComponent<ListEmptyStateProps & React.RefAttributes<HTMLDivElement>>;
