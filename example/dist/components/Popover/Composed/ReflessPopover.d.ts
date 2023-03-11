import { FunctionComponent, CSSProperties } from 'react';
import { PopoverProps } from '../Base/Popover';
import { Omit } from '../../../Types';
interface ReflessPopoverProps extends Omit<PopoverProps, 'triggerRef'> {
    /** Useful for correcting any layout disruptions */
    triggerStyle?: CSSProperties;
}
export declare const ReflessPopover: FunctionComponent<ReflessPopoverProps>;
export {};
