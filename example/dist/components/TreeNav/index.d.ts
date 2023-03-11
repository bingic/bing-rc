import React, { Component } from 'react';
import { TreeNavProps } from './TreeNav';
export declare class TreeNav extends Component<TreeNavProps> {
    static readonly displayName = "TreeNav";
    static TreeNav: React.ForwardRefExoticComponent<TreeNavProps & React.RefAttributes<HTMLElement>>;
    static Header: React.ForwardRefExoticComponent<import("./TreeNavHeader").TreeNavHeaderProps & React.RefAttributes<HTMLButtonElement>>;
    static User: React.ForwardRefExoticComponent<import("./TreeNavUser").TreeNavUserProps & React.RefAttributes<HTMLButtonElement>>;
    static UserItem: React.FunctionComponent<import("./TreeNavUserItem").TreeNavUserItemProps>;
    static Item: React.ForwardRefExoticComponent<import("./TreeNavItem").TreeNavItemProps & React.RefAttributes<HTMLButtonElement>>;
    static SubMenu: React.ForwardRefExoticComponent<import("../../Types").StandardFunctionProps & import("./TreeNavSubMenu").OptionalProp & React.RefAttributes<HTMLDivElement>>;
    static SubItem: React.FunctionComponent<import("./TreeNavSubItem").TreeNavSubItemProps>;
    static SubHeading: React.FunctionComponent<import("./TreeNavSubHeading").TreeNavSubHeadingProps>;
    render(): JSX.Element;
}
export { TreeNavProps, TreeNavRef } from './TreeNav';
export * from './TreeNavHeader';
export * from './TreeNavUser';
export * from './TreeNavUserItem';
export * from './TreeNavItem';
export * from './TreeNavSubMenu';
export * from './TreeNavSubItem';
export * from './TreeNavSubHeading';
