import React from 'react';
import { StandardFunctionProps } from '../../../Types';
export interface ResourceListHeaderProps extends StandardFunctionProps {
    /** Used for rendering a filter input above the list, opposite the sort headers */
    filterComponent?: JSX.Element;
}
export type ResourceListHeaderRef = HTMLDivElement;
export declare const ResourceListHeader: React.ForwardRefExoticComponent<ResourceListHeaderProps & React.RefAttributes<HTMLDivElement>>;
