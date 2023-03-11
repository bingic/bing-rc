import React, { Component } from 'react';
import { PopoverProps } from './Base/Popover';
export declare class Popover extends Component<PopoverProps> {
    static readonly displayName = "Popover";
    static Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
    static DismissButton: React.ForwardRefExoticComponent<import("../Button/Composed/DismissButton").DismissButtonProps & React.RefAttributes<HTMLButtonElement>>;
    render(): JSX.Element;
}
export { PopoverRef } from './Base/Popover';
