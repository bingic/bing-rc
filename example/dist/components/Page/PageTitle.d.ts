import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface PageTitleProps extends StandardFunctionProps {
    /** Text to display in title */
    title: string;
    /** Alternate text for screen readers */
    altText?: string;
}
export type PageTitleRef = HTMLHeadingElement;
export declare const PageTitle: React.ForwardRefExoticComponent<PageTitleProps & React.RefAttributes<HTMLHeadingElement>>;
