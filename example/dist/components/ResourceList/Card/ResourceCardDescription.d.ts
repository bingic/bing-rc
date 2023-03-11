import React from 'react';
import { StandardFunctionProps } from '../../../Types';
import './ResourceCardDescription.scss';
export interface ResourceCardDescriptionProps extends StandardFunctionProps {
    /** Text to display in description */
    description: string;
}
export type ResourceCardDescriptionRef = HTMLDivElement;
export declare const ResourceCardDescription: React.ForwardRefExoticComponent<ResourceCardDescriptionProps & React.RefAttributes<HTMLDivElement>>;
