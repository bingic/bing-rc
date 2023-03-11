import React, { Component } from 'react';
import { TabsProps } from './Tabs';
export declare class Tabs extends Component<TabsProps> {
    static readonly displayName = "Tabs";
    static Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLElement>>;
    static Tab: React.ForwardRefExoticComponent<import("./Tab").TabProps & React.RefAttributes<HTMLButtonElement>>;
    static TabContents: React.ForwardRefExoticComponent<import("./TabContents").TabContentsProps & React.RefAttributes<HTMLDivElement>>;
    static Container: React.ForwardRefExoticComponent<import("./TabsContainer").TabsContainerProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { TabsProps, TabsRef } from './Tabs';
export * from './Tab';
export * from './TabContents';
export * from './TabsContainer';
