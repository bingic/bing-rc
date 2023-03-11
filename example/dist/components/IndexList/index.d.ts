import React, { Component } from 'react';
import { IndexListProps } from './IndexList';
export declare class IndexList extends Component<IndexListProps> {
    static readonly displayName = "IndexList";
    static IndexList: React.ForwardRefExoticComponent<IndexListProps & React.RefAttributes<HTMLTableElement>>;
    static Body: React.ForwardRefExoticComponent<import("./IndexListBody").IndexListBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    static Header: React.ForwardRefExoticComponent<import("./IndexListHeader").IndexListHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
    static HeaderCell: React.ForwardRefExoticComponent<import("./IndexListHeaderCell").IndexListHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
    static Row: React.ForwardRefExoticComponent<import("./IndexListRow").IndexListRowProps & React.RefAttributes<HTMLTableRowElement>>;
    static Cell: React.ForwardRefExoticComponent<import("./IndexListRowCell").IndexListRowCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
    render(): JSX.Element;
}
export { IndexListProps, IndexListRef } from './IndexList';
export * from './IndexListBody';
export * from './IndexListHeader';
export * from './IndexListHeaderCell';
export * from './IndexListRow';
export * from './IndexListRowCell';
