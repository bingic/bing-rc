import React from 'react';
import './Bullet.scss';
import { IconFont, StandardFunctionProps, InfluxColors, ComponentSize } from '../../../Types';
export interface BulletProps extends StandardFunctionProps {
    /** Icon to display */
    glyph?: IconFont | string;
    /** Text to display */
    text?: string | number;
    /** Coloration of bullet circle */
    backgroundColor?: InfluxColors | string;
    /** Coloration of bullet text or icon */
    color?: InfluxColors | string;
    /** Size of bullet */
    size?: ComponentSize;
}
export type BulletRef = HTMLSpanElement;
export declare const Bullet: React.ForwardRefExoticComponent<BulletProps & React.RefAttributes<HTMLSpanElement>>;
