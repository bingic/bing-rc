import React, { Component } from 'react';
import { NavMenuProps } from './NavMenu';
export declare class NavMenu extends Component<NavMenuProps> {
    static readonly displayName = "NavMenu";
    static NavMenu: React.ForwardRefExoticComponent<import("../../Types").StandardFunctionProps & React.RefAttributes<HTMLElement>>;
    static Item: React.ForwardRefExoticComponent<import("./NavMenuItem").NavMenuItemProps & React.RefAttributes<HTMLDivElement>>;
    static SubItem: React.FunctionComponent<import("./NavMenuSubItem").NavMenuSubItemProps>;
    render(): JSX.Element;
}
export { NavMenuProps, NavMenuRef } from './NavMenu';
export * from './NavMenuItem';
export * from './NavMenuSubItem';
