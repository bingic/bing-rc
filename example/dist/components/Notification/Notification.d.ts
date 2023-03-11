import React from 'react';
import { Alignment, VerticalAlignment } from '../../Types';
import { NotificationDialogProps, NotificationDialogRef } from './NotificationDialog';
import './Notification.scss';
export interface NotificationProps extends NotificationDialogProps {
    /** Positioning the notification left, center, or right on the window */
    horizontalAlignment?: Alignment;
    /** Positioning the notification top, middle, or bottom on the window */
    verticalAlignment?: VerticalAlignment;
    /** If a function is passed in a dismiss button will appear on the notification */
    onDismiss?: (id?: string) => void;
    /** Function called when duration expires */
    onTimeout?: (id?: string) => void;
    /** Duration before notification calls onTimeout function */
    duration?: number;
}
export type NotificationRef = NotificationDialogRef;
export declare const NotificationRoot: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
