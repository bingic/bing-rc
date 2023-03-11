import React, { Component } from 'react';
import { PaginationNavProps } from './PaginationNav';
export declare class PaginationNav extends Component<PaginationNavProps> {
    static readonly displayName = "PaginationNav";
    static PaginationNav: React.ForwardRefExoticComponent<PaginationNavProps & React.RefAttributes<HTMLElement>>;
    static Item: React.ForwardRefExoticComponent<import("./PaginationItem").PaginationItemProps & React.RefAttributes<HTMLLIElement>>;
    static TruncationItem: React.ForwardRefExoticComponent<import("./paginationTruncationItem").PaginationTruncationItemProps & React.RefAttributes<HTMLLIElement>>;
    static DirectionItem: React.ForwardRefExoticComponent<import("./PaginationDirectionItem").PaginationDirectionItemProps & React.RefAttributes<HTMLLIElement>>;
    static Input: React.ForwardRefExoticComponent<import("./PaginationInput").PaginationInputProps & React.RefAttributes<HTMLInputElement>>;
    render(): JSX.Element;
}
export { Pagination, PaginationNavRef } from './PaginationNav';
export * from './PaginationItem';
export * from './paginationTruncationItem';
export * from './PaginationDirectionItem';
export * from './PaginationInput';
