import React from 'react';
import { FlexBoxRef, FlexBoxProps } from '../../FlexBox';
import { Omit, ComponentSize } from '../../../Types';
export interface PanelFooterProps extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
    /** Controls padding */
    size?: ComponentSize;
}
export type PanelFooterRef = FlexBoxRef;
export declare const PanelFooter: React.ForwardRefExoticComponent<PanelFooterProps & React.RefAttributes<HTMLDivElement>>;
