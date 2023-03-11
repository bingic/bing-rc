import React, { MouseEvent, KeyboardEvent } from 'react';
import { StandardFunctionProps, ComponentSize, ComponentColor, IconFont } from '../../Types';
import './SelectableCard.scss';
export interface SelectableCardProps extends StandardFunctionProps {
    /** Unique identifier for this card, is passed in to the hidden checkbox input */
    id: string;
    /** Text label */
    label: string;
    /** Useful for toggling selected state */
    onClick: (id?: string, e?: MouseEvent<SelectableCardRef>) => void;
    /** Useful for toggling selected state */
    onKeyDown?: (id?: string, e?: KeyboardEvent<SelectableCardRef>) => void;
    /** Controls font size of the card's label */
    fontSize?: ComponentSize;
    /** Controls the color of the selected border */
    color?: ComponentColor;
    /** Renders the card in selected state */
    selected?: boolean;
    /** Renders the card in disabled state */
    disabled?: boolean;
    /** Name of the form containing this card */
    formName?: string;
    /** Customize the icon that appears in selected state */
    icon?: IconFont;
    /** Customize the icon that appears in selected state */
    tabIndex?: number;
}
export type SelectableCardRef = HTMLDivElement;
export declare const SelectableCard: React.ForwardRefExoticComponent<SelectableCardProps & React.RefAttributes<HTMLDivElement>>;
