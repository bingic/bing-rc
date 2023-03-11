import React from 'react';
import { FlexBoxProps, FlexBoxRef } from '../../FlexBox';
import { ComponentSize } from '../../../Types';
export interface PanelBodyProps extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
    /** Controls padding */
    size?: ComponentSize;
}
export type PanelBodyRef = FlexBoxRef;
export declare const PanelBody: React.ForwardRefExoticComponent<PanelBodyProps & React.RefAttributes<HTMLDivElement>>;
