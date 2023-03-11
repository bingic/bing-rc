import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface IndexListRowProps extends StandardFunctionProps {
    /** Renders the row with disabled styles */
    disabled?: boolean;
    /** Brightens the row so it can contrast with components such as Panel or Tabs */
    brighten?: boolean;
}
export type IndexListRowRef = HTMLTableRowElement;
export declare const IndexListRow: React.ForwardRefExoticComponent<IndexListRowProps & React.RefAttributes<HTMLTableRowElement>>;
