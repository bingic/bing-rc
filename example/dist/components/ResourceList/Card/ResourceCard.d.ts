import React from 'react';
import { FlexBoxProps } from '../../FlexBox';
import { Omit } from '../../../Types';
import './ResourceCard.scss';
export interface ResourceCardProps extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
    /** Renders the card with disabled styles */
    disabled?: boolean;
    /** Renders the context menu component in its designated place */
    contextMenu?: JSX.Element;
    /** Controls the interaction style for the contextMenu */
    contextMenuInteraction?: 'alwaysVisible' | 'showOnHover';
    /** If true the card will highlight on mouse over */
    highlightOnHover?: boolean;
    /** Tracks when card is selected **/
    cardSelected?: boolean;
    cardSelectable?: boolean;
    handleCardSelection?: (resourceId: string) => void;
}
export type ResourceCardRef = HTMLDivElement;
export declare const ResourceCardRoot: React.ForwardRefExoticComponent<ResourceCardProps & React.RefAttributes<HTMLDivElement>>;
