import React, { Component } from 'react';
import { EmptyStateProps } from './EmptyState';
export declare class EmptyState extends Component<EmptyStateProps> {
    static readonly displayName = "EmptyState";
    static EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
    static Text: React.ForwardRefExoticComponent<import("../../Types").StandardFunctionProps & React.RefAttributes<HTMLHeadingElement>>;
    static SubText: React.ForwardRefExoticComponent<import("../../Types").StandardFunctionProps & React.RefAttributes<HTMLParagraphElement>>;
    render(): JSX.Element;
}
export { EmptyStateProps, EmptyStateRef } from './EmptyState';
export * from './EmptyStateText';
export * from './EmptyStateSubText';
