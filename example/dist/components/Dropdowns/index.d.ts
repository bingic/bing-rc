import React, { Component } from 'react';
import { DropdownProps } from './Dropdown';
export declare class Dropdown extends Component<DropdownProps> {
    static readonly displayName = "Dropdown";
    static Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
    static Menu: React.ForwardRefExoticComponent<import("./DropdownMenu").DropdownMenuProps & React.RefAttributes<HTMLDivElement>>;
    static Button: React.ForwardRefExoticComponent<import("./DropdownButton").DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
    static Item: React.ForwardRefExoticComponent<import("./DropdownItem").DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
    static ItemEmpty: React.ForwardRefExoticComponent<import("./DropdownItemEmpty").DropdownItemEmptyProps & React.RefAttributes<HTMLDivElement>>;
    static LinkItem: React.ForwardRefExoticComponent<import("./DropdownLinkItem").DropdownLinkItemProps & React.RefAttributes<HTMLDivElement>>;
    static Divider: React.ForwardRefExoticComponent<import("./DropdownDivider").DropdownDividerProps & React.RefAttributes<HTMLDivElement>>;
    static HrefItem: React.ForwardRefExoticComponent<import("./DropdownHrefItem").DropdownHrefItemProps & React.RefAttributes<HTMLButtonElement>>;
    render(): JSX.Element;
}
export { DropdownProps, DropdownRef, MenuStatus } from './Dropdown';
export * from './DropdownMenu';
export * from './DropdownButton';
export * from './DropdownItem';
export * from './DropdownItemEmpty';
export * from './DropdownLinkItem';
export * from './DropdownDivider';
export * from './DropdownHrefItem';
