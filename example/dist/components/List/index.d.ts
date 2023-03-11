import React, { Component } from 'react';
import { ListProps } from './List';
export declare class List extends Component<ListProps> {
    static readonly displayName = "List";
    static List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>;
    static Item: React.ForwardRefExoticComponent<import("./ListItem").ListItemProps & React.RefAttributes<HTMLButtonElement>>;
    static EmptyState: React.ForwardRefExoticComponent<import("./ListEmptyState").ListEmptyStateProps & React.RefAttributes<HTMLDivElement>>;
    static Divider: React.ForwardRefExoticComponent<import("./ListDivider").ListDividerProps & React.RefAttributes<HTMLDivElement>>;
    static Indicator: React.FunctionComponent<import("./ListIndicator").ListIndicatorProps>;
    static Icon: React.FunctionComponent<import("./ListIcon").ListIconProps>;
    render(): JSX.Element;
}
export { ListProps, ListRef } from './List';
export * from './ListItem';
export * from './ListEmptyState';
export * from './ListDivider';
export * from './ListIndicator';
export * from './ListIcon';
