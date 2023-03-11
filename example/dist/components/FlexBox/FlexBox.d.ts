import React, { MouseEvent } from 'react';
import { FlexDirection, JustifyContent, AlignItems, ComponentSize, StandardFunctionProps } from '../../Types';
import './FlexBox.scss';
export interface FlexBoxProps extends StandardFunctionProps {
    /** Vertical or horizontal flex alignment */
    direction?: FlexDirection;
    /** Inserted margin between children */
    margin?: ComponentSize;
    /** Can be FlexStart, FlexEnd, Center, SpaceBetween, or SpaceAround */
    justifyContent?: JustifyContent;
    /** Can be FlexStart, FlexEnd, Center, or Stretch */
    alignItems?: AlignItems;
    /** stretches component spacer to fit parent width */
    stretchToFitWidth?: boolean;
    /** stretches component spacer to fit parent height */
    stretchToFitHeight?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
export type FlexBoxRef = HTMLDivElement;
export declare const FlexBoxRoot: React.ForwardRefExoticComponent<FlexBoxProps & React.RefAttributes<HTMLDivElement>>;
