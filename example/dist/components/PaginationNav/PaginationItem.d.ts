import React, { MouseEvent } from 'react';
import './Pagination.scss';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PaginationItemProps extends StandardFunctionProps {
    page?: string;
    isActive: boolean;
    onClick?: (e?: MouseEvent<HTMLElement>) => void;
    size?: ComponentSize;
}
export type PaginationItemRef = HTMLLIElement;
export declare const PaginationItem: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLLIElement>>;
