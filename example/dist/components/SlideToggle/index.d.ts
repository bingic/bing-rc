import React, { Component } from 'react';
import { SlideToggleProps } from './SlideToggle';
export declare class SlideToggle extends Component<SlideToggleProps> {
    static readonly displayName = "SlideToggle";
    static SlideToggle: React.ForwardRefExoticComponent<SlideToggleProps & React.RefAttributes<HTMLButtonElement>>;
    render(): JSX.Element;
}
export { SlideToggleProps, SlideToggleRef } from './SlideToggle';
