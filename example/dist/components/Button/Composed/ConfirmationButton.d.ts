import { FunctionComponent, CSSProperties } from 'react';
import { ButtonProps } from './Button';
import './ConfirmationButton.scss';
import { Omit, ComponentColor, Appearance } from '../../../Types';
export interface ConfirmationButtonProps extends Omit<ButtonProps, 'onClick' | 'active' | 'type' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onMouseOut'> {
    /** Text to appear in confirmation popover */
    confirmationLabel: string;
    /** Text to appear in confirmation button */
    confirmationButtonText: string;
    /** Color of confirmation button */
    confirmationButtonColor?: ComponentColor;
    /** Popover dialog color */
    popoverColor?: ComponentColor;
    /** Means of applying color to popover */
    popoverAppearance?: Appearance;
    /** Allows customization of Popover */
    popoverClassName?: string;
    /** Allows customization of Popover */
    popoverStyle?: CSSProperties;
    /** Callback function fired when state changes to "show" */
    onShow?: () => void;
    /** Callback function fired when state changes to "hide" */
    onHide?: () => void;
    /** Function to call when confirmation is clicked, passes 'value' prop in */
    onConfirm: (returnValue?: any) => void;
    /** Optional value to have passed back via onConfirm */
    returnValue?: any;
}
export declare const ConfirmationButton: FunctionComponent<ConfirmationButtonProps>;
