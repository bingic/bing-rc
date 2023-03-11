import React from 'react';
import { RemoteDataState, StandardFunctionProps } from '../../Types';
import './SparkleSpinner.scss';
export interface SparkleSpinnerProps extends StandardFunctionProps {
    /** Size of spinner (square) */
    sizePixels?: number;
    /** State */
    loading?: RemoteDataState;
}
export type SparkleSpinnerRef = HTMLDivElement;
export declare const SparkleSpinner: React.ForwardRefExoticComponent<SparkleSpinnerProps & React.RefAttributes<HTMLDivElement>>;
