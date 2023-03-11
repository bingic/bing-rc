import React, { MouseEvent, RefObject } from 'react';
import { InputRef } from '../../Inputs/Input';
import { StandardFunctionProps } from '../../../Types';
import './ResourceCardEditableName.scss';
export interface ResourceCardEditableNameProps extends StandardFunctionProps {
    /** Called when editing is finished, new name is passed  */
    onUpdate: (name: string) => void;
    /** Text to display as name */
    name: string;
    /** Fires when the name itself is clicked and not edited */
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    /** Placeholder text to display in input during editing */
    placeholder?: string;
    /** Text to display when not editing and when no name is present */
    noNameString?: string;
    /** TestID for edit button sub-component */
    buttonTestID?: string;
    /** TestID for input sub-component */
    inputTestID?: string;
    /** Pass through to assign a ref to the Input present in edit mode */
    inputRef?: RefObject<InputRef>;
    /** For the anchor tag in the resource card - needed for browsers to show the proper context menu */
    href?: string;
}
export type ResourceCardEditableNameRef = HTMLDivElement;
export declare const ResourceCardEditableName: React.ForwardRefExoticComponent<ResourceCardEditableNameProps & React.RefAttributes<HTMLDivElement>>;
