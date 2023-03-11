import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface PageSubTitleProps extends StandardFunctionProps {
    /** Text to display in title */
    title: string;
}
export type PageSubTitleRef = HTMLHeadingElement;
export declare const PageSubTitle: React.ForwardRefExoticComponent<PageSubTitleProps & React.RefAttributes<HTMLHeadingElement>>;
