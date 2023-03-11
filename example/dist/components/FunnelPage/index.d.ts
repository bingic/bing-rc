import React, { Component } from 'react';
import { FunnelPageProps } from './Family/FunnelPage';
export declare class FunnelPage extends Component<FunnelPageProps> {
    static readonly displayName = "FunnelPage";
    static FunnelPage: React.ForwardRefExoticComponent<FunnelPageProps & React.RefAttributes<HTMLDivElement>>;
    static Footer: React.ForwardRefExoticComponent<import("./Family/FunnelPageFooter").FunnelPageFooterProps & React.RefAttributes<HTMLDivElement>>;
    static FooterSection: React.ForwardRefExoticComponent<import("./Family/FunnelPageFooterSection").FunnelPageFooterSectionProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { FunnelPageProps, FunnelPageRef } from './Family/FunnelPage';
export * from './Family/FunnelPageFooter';
export * from './Family/FunnelPageFooterSection';
