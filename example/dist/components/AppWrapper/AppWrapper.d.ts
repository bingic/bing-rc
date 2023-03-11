import React from 'react';
import './AppWrapper.scss';
import { StandardFunctionProps } from '../../Types';
export type AppWrapperType = 'standard' | 'funnel';
export interface AppWrapperProps extends StandardFunctionProps {
    /** Hides the page header and nav menu so that the contents can take up the whole screen */
    presentationMode?: boolean;
    /** Controls responsive layout (can be either "page" for "funnel") */
    type?: AppWrapperType;
}
export type AppWrapperRef = HTMLDivElement;
export declare const AppWrapper: React.ForwardRefExoticComponent<AppWrapperProps & React.RefAttributes<HTMLDivElement>>;
