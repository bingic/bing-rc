import { FunctionComponent, CSSProperties } from 'react';
import { StandardFunctionProps, Orientation, Gradients } from '../../Types';
import './DraggableResizer.scss';
export interface DraggableResizerProps extends StandardFunctionProps {
    /** Orientation the draggable panels stack in */
    handleOrientation: Orientation;
    /** Expects and array of numbers between 0 - 1 */
    handlePositions: number[];
    /** Returns the updated array of numbers between 0 - 1, used to manage state */
    onChangePositions: (positions: number[]) => void;
    /** Gradient theme for handle */
    handleGradient?: Gradients;
    backgroundStyle?: CSSProperties;
    handleBarStyle?: CSSProperties;
}
export declare const DraggableResizerRoot: FunctionComponent<DraggableResizerProps>;
