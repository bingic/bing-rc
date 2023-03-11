import React from 'react';
import { ButtonProps } from '../Composed/Button';
import { Omit, LinkTarget, LinkRel } from '../../../Types';
import './LinkButton.scss';
export interface LinkButtonProps extends Omit<ButtonProps, 'onClick' | 'onMouseOver' | 'onMouseOut' | 'onMouseEnter' | 'onMouseLeave' | 'type'> {
    /** Destination for link button */
    href: string;
    /** Where to open to the link */
    target?: LinkTarget | string;
    /** Describes the relationship between this document and the linked document */
    rel?: LinkRel;
    disabledTitleText?: string;
}
export type LinkButtonRef = HTMLAnchorElement;
export declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLAnchorElement>>;
