import React, { Component } from 'react';
import { SquareGridProps } from './SquareGrid';
export declare class SquareGrid extends Component<SquareGridProps> {
    static readonly displayName = "SquareGrid";
    static SquareGrid: React.ForwardRefExoticComponent<SquareGridProps & React.RefAttributes<HTMLDivElement>>;
    static Card: React.ForwardRefExoticComponent<import("./SquareGridCard").SquareGridCardProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { SquareGridProps, SquareGridRef } from './SquareGrid';
export * from './SquareGridCard';
