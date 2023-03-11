import React, { Component } from 'react';
import { PanelProps } from './Family/Panel';
export declare class Panel extends Component<PanelProps> {
    static readonly displayName = "Panel";
    static Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
    static Header: React.ForwardRefExoticComponent<import("./Family/PanelHeader").PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static SymbolHeader: React.ForwardRefExoticComponent<import("./Composed/PanelSymbolHeader").PanelSymbolHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static Body: React.ForwardRefExoticComponent<import("./Family/PanelBody").PanelBodyProps & React.RefAttributes<HTMLDivElement>>;
    static Footer: React.ForwardRefExoticComponent<import("./Family/PanelFooter").PanelFooterProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { PanelProps, PanelRef } from './Family/Panel';
export * from './Family/PanelHeader';
export * from './Composed/PanelSymbolHeader';
export * from './Family/PanelBody';
export * from './Family/PanelFooter';
