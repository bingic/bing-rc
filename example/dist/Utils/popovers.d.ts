import { RefObject, CSSProperties } from 'react';
import { PopoverPosition } from '../Types';
export interface PopoverStyles {
    dialogStyles: CSSProperties;
    caretStyles: CSSProperties;
}
export declare const calculatePopoverStyles: (position: PopoverPosition, triggerRef: RefObject<any>, dialogRef: RefObject<HTMLDivElement>, caretSize: number, distanceFromTrigger: number) => PopoverStyles;
