import React, { Component } from 'react';
import { SelectGroupProps } from './SelectGroup';
export declare class SelectGroup extends Component<SelectGroupProps> {
    static readonly displayName = "SelectGroup";
    static SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
    static Option: React.ForwardRefExoticComponent<import("./SelectGroupOption").SelectGroupOptionProps & React.RefAttributes<HTMLInputElement>>;
    render(): JSX.Element;
}
export { SelectGroupProps, SelectGroupRef } from './SelectGroup';
export * from './SelectGroupOption';
