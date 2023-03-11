import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface TableHeaderProps extends StandardFunctionProps {
}
export type TableHeaderRef = HTMLTableSectionElement;
export declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
