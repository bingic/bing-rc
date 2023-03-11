import React from 'react';
import { FlexBoxProps, FlexBoxRef } from '../../FlexBox';
import { Omit } from '../../../Types';
import './ResourceCardMeta.scss';
export interface ResourceCardMetaProps extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight' | 'margin'> {
}
export type ResourceCardMetaRef = FlexBoxRef;
export declare const ResourceCardMeta: React.ForwardRefExoticComponent<ResourceCardMetaProps & React.RefAttributes<HTMLDivElement>>;
