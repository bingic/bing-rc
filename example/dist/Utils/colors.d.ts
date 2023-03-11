import { CSSProperties } from 'react';
import { Gradients, Gradient, DropdownMenuTheme } from '../Types';
export declare const getColorsFromGradient: (gradient: Gradients | DropdownMenuTheme | string) => Gradient;
export interface CSSGradientColor {
    position: number;
    color: string;
}
export declare const generateInlineCSSGradient: (angle: number, colors: CSSGradientColor[]) => CSSProperties;
export declare const getAverageColorFromLinearGradient: (linearGradient: string) => string;
