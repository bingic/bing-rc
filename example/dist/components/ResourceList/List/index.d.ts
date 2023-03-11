import React, { Component } from 'react';
import { ResourceListProps } from './ResourceList';
export declare class ResourceList extends Component<ResourceListProps> {
    static readonly displayName = "ResourceList";
    static ResourceList: React.ForwardRefExoticComponent<ResourceListProps & React.RefAttributes<HTMLDivElement>>;
    static Header: React.ForwardRefExoticComponent<import("./ResourceListHeader").ResourceListHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static Sorter: React.ForwardRefExoticComponent<import("./ResourceListSorter").ResourceListSorterProps & React.RefAttributes<HTMLDivElement>>;
    static Body: React.ForwardRefExoticComponent<import("./ResourceListBody").ResourceListBodyProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { ResourceListProps, ResourceListRef } from './ResourceList';
export * from './ResourceListHeader';
export * from './ResourceListSorter';
export * from './ResourceListBody';
