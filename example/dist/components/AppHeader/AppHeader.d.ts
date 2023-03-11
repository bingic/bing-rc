import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
import './AppHeader.scss';
export interface AppHeaderProps extends StandardFunctionProps {
    /** Height of header bar */
    size?: ComponentSize;
}
export type AppHeaderRef = HTMLDivElement;
export declare const AppHeaderRoot: React.ForwardRefExoticComponent<AppHeaderProps & React.RefAttributes<HTMLDivElement>>;
