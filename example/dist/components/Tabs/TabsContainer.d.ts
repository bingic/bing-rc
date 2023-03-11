import React from 'react';
import { FlexBoxRef } from '../FlexBox';
import { StandardFunctionProps, Orientation } from '../../Types';
export interface TabsContainerProps extends StandardFunctionProps {
    /** Should match the orientation prop of Tabs component */
    orientation: Orientation;
    /** Stretches TabsContainer to fit parent width */
    stretchToFitWidth?: boolean;
    /** Stretches TabsContainer to fit parent height */
    stretchToFitHeight?: boolean;
}
export type TabsContainerRef = FlexBoxRef;
export declare const TabsContainer: React.ForwardRefExoticComponent<TabsContainerProps & React.RefAttributes<HTMLDivElement>>;
