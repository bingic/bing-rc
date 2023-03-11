import React, { RefObject } from 'react';
import { SelectGroupRef, SelectGroupOptionRef } from '../../SelectGroup/index';
import { StandardFunctionProps, ComponentColor, ComponentSize, AutoInputMode } from '../../../Types';
import './AutoInput.scss';
export interface AutoInputProps extends StandardFunctionProps {
    /** Pass in a component of type "Input" */
    inputComponent: JSX.Element;
    /** Fires when the radio is toggled and the mode changes */
    onChangeMode: (mode: AutoInputMode) => void;
    /** Modality of radio, either "Auto" or "Custom" */
    mode: AutoInputMode;
    /** SelectGroup color */
    color?: ComponentColor;
    /** Controls size of SelectGroup & Input sub-components */
    size?: ComponentSize;
    /** Pass through ref for SelectGroup */
    radioRef?: RefObject<SelectGroupRef>;
    /** Pass through ref for "Auto" SelectGroupOption */
    radioButtonAutoRef?: RefObject<SelectGroupOptionRef>;
    /** Pass through ref for "Custom" SelectGroupOption */
    radioButtonCustomRef?: RefObject<SelectGroupOptionRef>;
}
export type AutoInputRef = HTMLDivElement;
export declare const AutoInput: React.ForwardRefExoticComponent<AutoInputProps & React.RefAttributes<HTMLDivElement>>;
