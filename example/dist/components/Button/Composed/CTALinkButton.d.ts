import React from 'react';
import { LinkButtonProps, LinkButtonRef } from './LinkButton';
import './CTAButton.scss';
export interface CTALinkButtonProps extends Omit<LinkButtonProps, 'size'> {
}
export type CTALinkButtonRef = LinkButtonRef;
export declare const CTALinkButton: React.ForwardRefExoticComponent<CTALinkButtonProps & React.RefAttributes<HTMLAnchorElement>>;
