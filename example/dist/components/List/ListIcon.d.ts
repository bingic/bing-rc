import { FunctionComponent } from 'react';
import { IconFont } from '../../Types';
import './ListIcon.scss';
export interface ListIconProps {
    /** Icon to display */
    glyph: IconFont | string;
}
export declare const ListIcon: FunctionComponent<ListIconProps>;
