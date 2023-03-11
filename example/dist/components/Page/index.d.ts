import React, { Component } from 'react';
import { PageProps } from './Page';
export declare class Page extends Component<PageProps> {
    static readonly displayName = "Page";
    static Page: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLDivElement>>;
    static Header: React.ForwardRefExoticComponent<import("./PageHeader").PageHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static Title: React.ForwardRefExoticComponent<import("./PageTitle").PageTitleProps & React.RefAttributes<HTMLHeadingElement>>;
    static ControlBar: React.ForwardRefExoticComponent<import("./PageControlBar").PageControlBarProps & React.RefAttributes<HTMLDivElement>>;
    static ControlBarLeft: React.ForwardRefExoticComponent<import("./PageControlBarLeft").PageControlBarLeftProps & React.RefAttributes<HTMLDivElement>>;
    static ControlBarCenter: React.ForwardRefExoticComponent<import("./PageControlBarCenter").PageControlBarCenterProps & React.RefAttributes<HTMLDivElement>>;
    static ControlBarRight: React.ForwardRefExoticComponent<import("./PageControlBarRight").PageControlBarRightProps & React.RefAttributes<HTMLDivElement>>;
    static Contents: React.ForwardRefExoticComponent<import("./PageContents").PageContentsProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { PageProps, PageRef } from './Page';
export * from './PageHeader';
export * from './PageTitle';
export * from './PageControlBar';
export * from './PageControlBarLeft';
export * from './PageControlBarCenter';
export * from './PageControlBarRight';
export * from './PageContents';
