import React from 'react';
import { StandardFunctionProps, ComponentSize } from '../../Types';
import './AppHeaderLogo.scss';
export interface AppHeaderLogoProps extends StandardFunctionProps {
    /** Image source url */
    src?: string;
    /** Size of logo */
    size?: ComponentSize;
}
export type AppHeaderLogoRef = HTMLDivElement;
export declare const AppHeaderLogo: React.ForwardRefExoticComponent<AppHeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
