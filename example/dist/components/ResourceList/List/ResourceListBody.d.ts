import React from 'react';
import { StandardFunctionProps } from '../../../Types';
export interface ResourceListBodyProps extends StandardFunctionProps {
    /** Element to show when no children are passed in, useful for implementing filtering */
    emptyState: JSX.Element;
}
export type ResourceListBodyRef = HTMLDivElement;
export declare const ResourceListBody: React.ForwardRefExoticComponent<ResourceListBodyProps & React.RefAttributes<HTMLDivElement>>;
