import React from 'react';
import { PanelProps } from '..';
import './BannerPanel.scss';
import { IconFont, ComponentSize, InfluxColors } from '../../../Types';
export interface BannerPanelProps extends PanelProps {
    /** Controls padding */
    size?: ComponentSize;
    /** Icon to be displayed to the left of text */
    icon?: IconFont;
    /** Color of text, leave blank to have the text color computed for optimal contrast from the background */
    textColor?: InfluxColors | string;
    /** Hides the icon at smallest breakpoint */
    hideMobileIcon?: boolean;
}
export type BannerPanelRef = HTMLDivElement;
export declare const BannerPanel: React.ForwardRefExoticComponent<BannerPanelProps & React.RefAttributes<HTMLDivElement>>;
