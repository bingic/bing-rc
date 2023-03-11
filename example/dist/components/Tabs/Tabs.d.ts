import React from 'react';
import { ComponentSize, StandardFunctionProps, Alignment, Orientation, Breakpoint } from '../../Types';
import './Tabs.scss';
export interface TabsProps extends StandardFunctionProps {
    /** Size of tabs */
    size?: ComponentSize;
    /** Alignment of tabs within container (large displays) */
    alignment?: Alignment;
    /** Layout axis of tabs */
    orientation?: Orientation;
    /** When the viewport is wider than this amount, render as tabs */
    dropdownBreakpoint?: Breakpoint | number;
    /** Label that only appears on small displays to indicate which tab is active when the component is collapsed  */
    dropdownLabel?: string;
    /** Alignment of tabs within container (small displays) */
    dropdownAlignment?: Alignment;
}
export type TabsRef = HTMLElement;
export declare const TabsRoot: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLElement>>;
