import React, { Component } from 'react';
import { FlexBoxProps } from './FlexBox';
export declare class FlexBox extends Component<FlexBoxProps> {
    static readonly displayName = "FlexBox";
    static FlexBox: React.ForwardRefExoticComponent<FlexBoxProps & React.RefAttributes<HTMLDivElement>>;
    static Child: React.ForwardRefExoticComponent<import("./FlexBoxChild").FlexBoxChildProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { FlexBoxProps, FlexBoxRef } from './FlexBox';
export * from './FlexBoxChild';
