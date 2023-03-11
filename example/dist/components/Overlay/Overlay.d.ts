import { FunctionComponent, CSSProperties } from 'react';
import { StandardFunctionProps } from '../../Types';
import './Overlay.scss';
export interface OverlayProps extends StandardFunctionProps {
    /** Controls visibility of the overlay */
    visible: boolean;
    /** Will replace the mask element with a custom element, useful for customizing the mask appearance */
    renderMaskElement?: (style: CSSProperties) => JSX.Element;
    /** Controls the transition timing */
    transitionDuration?: number;
    /** Accepts state handler for visible prop to enable escape press functionality */
    onEscape?: (visible: boolean) => void;
}
export declare const OverlayRoot: FunctionComponent<OverlayProps>;
