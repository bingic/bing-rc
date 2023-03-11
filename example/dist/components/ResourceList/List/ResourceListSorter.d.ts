import React from 'react';
import { Sort, StandardFunctionProps } from '../../../Types';
export interface ResourceListSorterProps extends StandardFunctionProps {
    /** Controls appearance of sort indicator (arrow) */
    sort: Sort;
    /** Unique identifier for use in managing sort state */
    sortKey: string;
    /** Name of attribute this element sorts on */
    name: string;
    /** Useful for triggering a change in sort state */
    onClick?: (nextSort: Sort, sortKey: string) => void;
}
export type ResourceListSorterRef = HTMLDivElement;
export declare const ResourceListSorter: React.ForwardRefExoticComponent<ResourceListSorterProps & React.RefAttributes<HTMLDivElement>>;
