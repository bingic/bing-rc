import { FunctionComponent } from 'react';
import './ListIndicator.scss';
export type ListIndicatorType = 'checkbox' | 'dot';
export interface ListIndicatorProps {
    /** Controls appearance of indicator */
    type: ListIndicatorType;
}
export declare const ListIndicator: FunctionComponent<ListIndicatorProps>;
