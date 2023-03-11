import React from 'react';
import { StandardFunctionProps } from '../../Types';
import './Page.scss';
export interface PageProps extends StandardFunctionProps {
    /** Use this prop to update document.title when the page first renders &  on subsequent updates */
    titleTag?: string;
}
export type PageRef = HTMLDivElement;
export declare const PageRoot: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLDivElement>>;
