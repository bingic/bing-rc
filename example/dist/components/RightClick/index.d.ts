import React, { Component } from 'react';
import { RightClickProps } from './Base/RightClick';
export declare class RightClick extends Component<RightClickProps> {
    static readonly displayName = "RightClick";
    static RightClick: React.ForwardRefExoticComponent<RightClickProps & React.RefAttributes<HTMLUListElement>>;
    static MenuItem: React.ForwardRefExoticComponent<import("./Base/RightClickMenuItem").RightClickMenuItemProps & React.RefAttributes<HTMLLIElement>>;
    static Divider: React.ForwardRefExoticComponent<import("./Base/RightClickDivider").RightClickDividerProps & React.RefAttributes<HTMLLIElement>>;
    render(): JSX.Element;
}
export { RightClickProps, RightClickRef } from './Base/RightClick';
export * from './Base/RightClickMenuItem';
export * from './Base/RightClickDivider';
