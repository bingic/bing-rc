import React, { Component } from 'react';
import { DraggableResizerProps } from './DraggableResizer';
export declare class DraggableResizer extends Component<DraggableResizerProps> {
    static readonly displayName = "DraggableResizer";
    static DraggableResizer: React.FunctionComponent<DraggableResizerProps>;
    static Panel: React.ForwardRefExoticComponent<import("./DraggableResizerPanel").DraggableResizerPanelProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { DraggableResizerProps } from './DraggableResizer';
export * from './DraggableResizerPanel';
