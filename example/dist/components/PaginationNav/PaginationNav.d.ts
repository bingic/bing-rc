import React from 'react';
import './Pagination.scss';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PaginationNavProps extends StandardFunctionProps {
    /** Total nuber of pages there exists */
    totalPages: number;
    /** currently active page */
    currentPage: number;
    /** Function to be called on page change */
    onChange: (page: number) => void;
    /** Determines how many pages are displayed within the nav.
     * For Example, pageRangeOffset =1 will result in 7 items -> {1,...,(4),5,(6),...20},
     * pageRangeOffset = 2 will result in 9 items ->  {1,...,(4,5),6,(7,8)...20},
     * pageRangeOffset = 3 will result in 11 items -> {1,...,(4,5,6),7,(8,9,10)...20} and so on
     * The compute functions will need to be refactored to provide more flexible range*/
    pageRangeOffset: number;
    hideDirectionIcon?: boolean;
    size?: ComponentSize;
    enableArrowPaginate?: boolean;
    enablePageInput?: boolean;
}
export type PaginationNavRef = HTMLElement;
export declare const Pagination: React.ForwardRefExoticComponent<PaginationNavProps & React.RefAttributes<HTMLElement>>;
