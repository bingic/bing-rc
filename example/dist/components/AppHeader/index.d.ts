import React, { Component } from 'react';
import { AppHeaderProps } from './AppHeader';
export declare class AppHeader extends Component<AppHeaderProps> {
    static readonly displayName = "AppHeader";
    static AppHeader: React.ForwardRefExoticComponent<AppHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static Logo: React.ForwardRefExoticComponent<import("./AppHeaderLogo").AppHeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { AppHeaderProps, AppHeaderRef } from './AppHeader';
export * from './AppHeaderLogo';
