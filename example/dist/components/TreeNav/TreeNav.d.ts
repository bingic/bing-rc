import React from 'react';
import { StandardFunctionProps } from '../../Types';
import './TreeNav.scss';
export interface TreeNavProps extends StandardFunctionProps {
    /** Controls the size of the navigation menu */
    expanded: boolean;
    /** Callback for handling toggle clicks */
    onToggleClick?: () => void;
    /** Element to appear at the top of the nav menu */
    headerElement?: JSX.Element;
    /** Banner to appear in expanded menu */
    bannerElement?: JSX.Element;
    /** User widget to appear below the header element */
    userElement?: JSX.Element;
    /** Controls how the Banner element renders when in collapsed state */
    hideBannerWhenCollapsed?: boolean;
}
export type TreeNavRef = HTMLElement;
export type TreeNavMobileState = 'expanded' | 'collapsed';
export declare const TreeNavRoot: React.ForwardRefExoticComponent<TreeNavProps & React.RefAttributes<HTMLElement>>;
