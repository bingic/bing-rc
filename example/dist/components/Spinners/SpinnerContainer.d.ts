import React from 'react';
import { RemoteDataState, StandardFunctionProps } from '../../Types';
import './SpinnerContainer.scss';
export interface SpinnerContainerProps extends StandardFunctionProps {
    /** Loading state */
    loading: RemoteDataState;
    /** Spinner component */
    spinnerComponent: JSX.Element;
}
export type SpinnerContainerRef = HTMLDivElement;
export declare const SpinnerContainer: React.ForwardRefExoticComponent<SpinnerContainerProps & React.RefAttributes<HTMLDivElement>>;
