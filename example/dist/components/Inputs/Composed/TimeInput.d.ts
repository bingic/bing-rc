import React, { ChangeEvent } from 'react';
import { InputProps, InputRef } from '../Input';
import { Omit } from '../../../Types';
export type TimeInputRef = InputRef;
export interface TimeInputProps extends Omit<InputProps, 'type' | 'checked' | 'spellCheck' | 'step' | 'min' | 'max' | 'pattern' | 'onChange' | 'autocomplete' | 'monospace'> {
    /** Callback for input changes */
    onChange: (value: string, e?: ChangeEvent<TimeInputRef>) => void;
    /** Currently selected unit */
    selectedUnit: string;
    /** Available units (in Dropdown) */
    units?: string[];
    /** Callback for when time unit is changed */
    onSelectUnit: (unit: string) => void;
}
export declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLInputElement>>;
