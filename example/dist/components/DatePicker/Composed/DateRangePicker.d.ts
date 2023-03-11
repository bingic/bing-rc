import React from 'react';
import { FlexBoxRef } from '../../FlexBox/index';
import { TimeRange, StandardFunctionProps } from '../../../Types';
export interface DateRangePickerProps extends StandardFunctionProps {
    /** Object of {upper: string, lower: string | null, seconds: number, format: string, label: string, duration: string} */
    timeRange: TimeRange;
    /** Function called when time range is set */
    onSetTimeRange: (timeRange: TimeRange) => void;
}
export type DateRangePickerRef = FlexBoxRef;
export declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLDivElement>>;
