import React, { MouseEvent } from 'react';
import './Pagination.scss';
import { ComponentSize, StandardFunctionProps } from '../../Types';
export interface PaginationTruncationItemProps extends StandardFunctionProps {
    onClick?: (e?: MouseEvent<HTMLElement>) => void;
    size?: ComponentSize;
}
export type PaginationTruncationItemRef = HTMLLIElement;
export declare const PaginationTruncationItem: React.ForwardRefExoticComponent<PaginationTruncationItemProps & React.RefAttributes<HTMLLIElement>>;
