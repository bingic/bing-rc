import React from 'react';
import '../DatePicker.scss';
import { StandardFunctionProps } from '../../../Types';
interface DatePickerProps extends StandardFunctionProps {
    /** Label for input field */
    label: string;
    /** Date value */
    dateTime?: string | null;
    /** Function called once a date is selected */
    onSelectDate: (date: string) => void;
}
export type DatePickerRef = HTMLDivElement;
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export {};
