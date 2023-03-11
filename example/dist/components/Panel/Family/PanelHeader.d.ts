import React from 'react';
import { FlexBoxProps, FlexBoxRef } from '../../FlexBox';
import { Omit, ComponentSize } from '../../../Types';
export interface PanelHeaderProps extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
    /** Controls padding */
    size?: ComponentSize;
}
export type PanelHeaderRef = FlexBoxRef;
export declare const PanelHeader: React.ForwardRefExoticComponent<PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;
