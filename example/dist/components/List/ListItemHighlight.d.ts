import { FC } from 'react';
import { InfluxColors, Gradients } from '../../Types';
export interface ListItemHighlightProps {
    /** Is the parent element selected? */
    selected?: boolean;
    /** Colorizes the background of the list item in hover and selected state */
    backgroundColor?: InfluxColors | string;
    /** Overrides backgroundColor, fills background with gradient */
    gradient?: Gradients;
}
export declare const ListItemHighlight: FC<ListItemHighlightProps>;
