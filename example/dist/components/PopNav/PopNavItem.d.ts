import { FunctionComponent, CSSProperties } from 'react';
import { StandardFunctionProps } from '../../Types';
export interface PopNavItemProps extends StandardFunctionProps {
    /** Controls highlighting of the menu item */
    active: boolean;
    /** Render prop for linked title text (suggested <a /> or <Link /> ) */
    titleLink: (className: string, testID?: string, style?: CSSProperties) => JSX.Element;
}
export declare const PopNavItem: FunctionComponent<PopNavItemProps>;
