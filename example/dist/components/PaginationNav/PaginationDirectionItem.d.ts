import React, { MouseEvent } from 'react';
import './Pagination.scss';
import { StandardFunctionProps, ComponentSize, Direction } from '../../Types';
export interface PaginationDirectionItemProps extends StandardFunctionProps {
    /** Caret Left or Caret Right on button */
    direction: Direction;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    size?: ComponentSize;
    isActive: boolean;
}
export type PaginationDirectionItemRef = HTMLLIElement;
export declare const PaginationDirectionItem: React.ForwardRefExoticComponent<PaginationDirectionItemProps & React.RefAttributes<HTMLLIElement>>;
