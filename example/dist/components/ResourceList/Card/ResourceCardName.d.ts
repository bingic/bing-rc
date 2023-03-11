import React, { MouseEvent } from 'react';
import { StandardFunctionProps, ComponentStatus } from '../../../Types';
import './ResourceCardName.scss';
export interface ResourceCardNameProps extends StandardFunctionProps {
    /** Text to display as name */
    name: string;
    /** Fires when the name is clicked */
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    /** error message to be displayeed IF the name component has an error status */
    errorMessage?: string;
    /** Display error state or default state */
    status?: ComponentStatus.Default | ComponentStatus.Error;
}
export type ResourceCardNameRef = HTMLDivElement;
export declare const ResourceCardName: React.ForwardRefExoticComponent<ResourceCardNameProps & React.RefAttributes<HTMLDivElement>>;
