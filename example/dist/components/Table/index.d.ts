import React, { Component } from 'react';
import { TableProps } from './Table';
export declare class Table extends Component<TableProps> {
    static readonly displayName = "Table";
    static Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
    static Body: React.ForwardRefExoticComponent<import("./TableBody").TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    static Cell: React.ForwardRefExoticComponent<import("./TableCell").TableCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
    static Footer: React.ForwardRefExoticComponent<import("./TableFooter").TableFooterProps & React.RefAttributes<HTMLTableSectionElement>>;
    static Header: React.ForwardRefExoticComponent<import("./TableHeader").TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
    static HeaderCell: React.ForwardRefExoticComponent<import("./TableHeaderCell").TableHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
    static Row: React.ForwardRefExoticComponent<import("./TableRow").TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
    render(): JSX.Element;
}
export { TableProps, TableRef } from './Table';
export * from './TableBody';
export * from './TableCell';
export * from './TableFooter';
export * from './TableHeader';
export * from './TableHeaderCell';
export * from './TableRow';
