import React, { RefObject } from 'react';
import { InputRef } from '../../Inputs/Input';
import { StandardFunctionProps } from '../../../Types';
import './ResourceCardDescription.scss';
export interface ResourceCardEditableDescriptionProps extends StandardFunctionProps {
    /** Called when user hits enter or blurs the input  */
    onUpdate: (description: string) => void;
    /** Text to display in description */
    description: string;
    /** Placeholder text to display in input during editing */
    placeholder?: string;
    /** Pass through to assign a ref to the Input present in edit mode */
    inputRef?: RefObject<InputRef>;
}
export type ResourceCardEditableDescriptionRef = HTMLDivElement;
export declare const ResourceCardEditableDescription: React.ForwardRefExoticComponent<ResourceCardEditableDescriptionProps & React.RefAttributes<HTMLDivElement>>;
