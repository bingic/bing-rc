import React, { Component } from 'react';
import { GridProps } from './Grid';
export declare class Grid extends Component<GridProps> {
    static readonly displayName = "Grid";
    static Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
    static Column: React.ForwardRefExoticComponent<import("./GridColumn").GridColumnProps & React.RefAttributes<HTMLDivElement>>;
    static Row: React.ForwardRefExoticComponent<import("./GridRow").GridRowProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { GridProps, GridRef } from './Grid';
export * from './GridColumn';
export * from './GridRow';
