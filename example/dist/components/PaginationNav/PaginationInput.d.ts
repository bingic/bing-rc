import React, { ChangeEvent, MouseEvent } from 'react';
import './Pagination.scss';
import { StandardFunctionProps, ComponentSize } from '../../Types';
export interface PaginationInputProps extends StandardFunctionProps {
    currentPage: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    size?: ComponentSize;
}
export type PaginationInputRef = HTMLInputElement;
export declare const PaginationInput: React.ForwardRefExoticComponent<PaginationInputProps & React.RefAttributes<HTMLInputElement>>;
