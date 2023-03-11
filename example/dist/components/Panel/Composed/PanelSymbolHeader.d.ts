import React from 'react';
import './PanelSymbolHeader.scss';
import { PanelHeaderProps, PanelHeaderRef } from '../Family/PanelHeader';
export interface PanelSymbolHeaderProps extends PanelHeaderProps {
    /** Element to display before header text (Bullet or Icon) */
    symbol?: JSX.Element;
    /** Panel title */
    title?: JSX.Element;
}
export type PanelSymbolHeaderRef = PanelHeaderRef;
export declare const PanelSymbolHeader: React.ForwardRefExoticComponent<PanelSymbolHeaderProps & React.RefAttributes<HTMLDivElement>>;
