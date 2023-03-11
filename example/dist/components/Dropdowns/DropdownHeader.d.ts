import { ButtonShape, ComponentColor, ComponentSize, ComponentStatus, IconFont, StandardFunctionProps } from '../../Types';
import { FC, MouseEvent } from 'react';
import './DropdownButton.scss';
export interface DropdownHeaderProps extends StandardFunctionProps {
    /** Function to be called on click of dropdown button */
    onClick: (e: MouseEvent<any>) => void;
    /** Button status state default, loading, or disabled */
    status?: ComponentStatus;
    /** Button color */
    color?: ComponentColor;
    /** Button size */
    size?: ComponentSize;
    /** Toggles button highlighted active state */
    active?: boolean;
    /** Icon to be displayed to the left of text or in place of text */
    icon?: IconFont;
    /** Text to be displayed on hover tooltip */
    title?: string;
    /** Text to be displayed on hover tooltip when disabled */
    disabledTitleText?: string;
    buttonShape?: ButtonShape;
}
/**
 * a header for our dropdown that is NOT a button, that is designed to take a text input as the child for the
 * type-ahead dropdown.
 *
 * This was built because the other header is a button, and the input has a button inside it (the 'x') which makes it clearable,
 * and React DOM does not allow a button to be nested inside another button.
 */
export declare const DropdownHeader: FC<DropdownHeaderProps>;
