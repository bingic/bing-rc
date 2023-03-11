import { FunctionComponent } from 'react';
import { StandardFunctionProps, Omit } from '../../Types';
export interface TreeNavSubHeadingProps extends Omit<StandardFunctionProps, 'id'> {
    /** Label for heading */
    label: string;
    /** Should the heading be rendered in lowercase */
    lowercase?: boolean;
}
export declare const TreeNavSubHeading: FunctionComponent<TreeNavSubHeadingProps>;
