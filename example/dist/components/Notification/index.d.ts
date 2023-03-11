import React, { Component } from 'react';
import { NotificationProps } from './Notification';
export declare class Notification extends Component<NotificationProps> {
    static readonly displayName = "Notification";
    static Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
    static Dialog: React.ForwardRefExoticComponent<import("./NotificationDialog").NotificationDialogProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { NotificationProps, NotificationRef } from './Notification';
export * from './NotificationDialog';
