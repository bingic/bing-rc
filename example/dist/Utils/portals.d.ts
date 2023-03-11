import { ReactPortal, ReactNode } from 'react';
import { VerticalAlignment, Alignment } from '../Types';
export declare const usePortal: () => {
    addElementToPortal: (element: ReactNode, forceToTop?: boolean) => ReactPortal;
    addNotificationToPortal: (element: ReactNode, x: Alignment, y: VerticalAlignment) => ReactPortal;
    addEventListenerToPortal: (eventType: string, func: any) => void;
    removeEventListenerFromPortal: (eventType: string, func: any) => void;
};
