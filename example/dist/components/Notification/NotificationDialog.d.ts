import React from 'react';
import { IconFont, Gradients, InfluxColors, ComponentSize, StandardFunctionProps, ComponentColor } from '../../Types';
import './Notification.scss';
export interface NotificationDialogProps extends StandardFunctionProps {
    /** Icon to display before notification content */
    icon?: IconFont;
    /** Controls if the notification is showing or hidden */
    visible?: boolean;
    /** Optional gradient theme of panel, supercedes backgroundColor prop */
    gradient?: Gradients;
    /** Notification color */
    backgroundColor?: InfluxColors | string;
    /** If a function is passed in a dismiss button will appear on the notification */
    onDismiss?: (id?: string) => void;
    /** Controls padding and font size of the notification */
    size: ComponentSize;
    /** Notification theme */
    color?: ComponentColor;
}
export type NotificationDialogRef = HTMLDivElement;
export declare const NotificationDialog: React.ForwardRefExoticComponent<NotificationDialogProps & React.RefAttributes<HTMLDivElement>>;
