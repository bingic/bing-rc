import { FunctionComponent } from 'react';
import { StandardFunctionProps } from '../../Types';
import './ColorPreview.scss';
interface ColorPreviewProps extends StandardFunctionProps {
    /** Any CSS color value is good */
    color: string;
}
export declare const ColorPreview: FunctionComponent<ColorPreviewProps>;
export {};
