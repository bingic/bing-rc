import React, { Component } from 'react';
import { OverlayProps } from './Overlay';
export declare class Overlay extends Component<OverlayProps> {
    static readonly displayName = "Overlay";
    static Overlay: React.FunctionComponent<OverlayProps>;
    static Container: React.ForwardRefExoticComponent<import("./OverlayContainer").OverlayContainerProps & React.RefAttributes<HTMLDivElement>>;
    static Header: React.ForwardRefExoticComponent<import("./OverlayHeader").OverlayHeaderProps & React.RefAttributes<HTMLDivElement>>;
    static Mask: React.ForwardRefExoticComponent<import("./OverlayMask").OverlayMaskProps & React.RefAttributes<HTMLDivElement>>;
    static Body: React.ForwardRefExoticComponent<import("./OverlayBody").OverlayBodyProps & React.RefAttributes<HTMLDivElement>>;
    static Footer: React.ForwardRefExoticComponent<import("./OverlayFooter").OverlayFooterProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { OverlayProps } from './Overlay';
export * from './OverlayContainer';
export * from './OverlayHeader';
export * from './OverlayMask';
export * from './OverlayBody';
export * from './OverlayFooter';
