import React, { Component } from 'react';
import { PopNavProps } from './PopNav';
export declare class PopNav extends Component<PopNavProps> {
    static readonly displayName = "PopNav";
    static PopNav: React.ForwardRefExoticComponent<PopNavProps & React.RefAttributes<HTMLDivElement>>;
    static Item: React.FunctionComponent<import("./PopNavItem").PopNavItemProps>;
    render(): JSX.Element;
}
export { PopNavProps, PopNavRef } from './PopNav';
export * from './PopNavItem';
