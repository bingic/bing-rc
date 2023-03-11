import { FunctionComponent } from 'react';
import { IconFont } from '../../../Types';
export interface IconAndTextProps {
    text?: string;
    icon?: IconFont | string;
    placeIconAfterText?: boolean;
}
export declare const IconAndText: FunctionComponent<IconAndTextProps>;
