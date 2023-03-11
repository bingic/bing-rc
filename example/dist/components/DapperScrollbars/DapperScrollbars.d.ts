import { FunctionComponent, UIEvent } from 'react';
import { ScrollState } from 'react-scrollbars-custom/dist/types/types';
import './DapperScrollbars.scss';
import { StandardFunctionProps, InfluxColors, ComponentSize } from '../../Types';
export type FusionScrollEvent = UIEvent<HTMLDivElement> & ScrollState;
export type FusionScrollHandler = (scrollValues: FusionScrollEvent, prevScrollValues?: ScrollState) => void;
interface DapperScrollbarsProps extends StandardFunctionProps {
    /** Toggle display of tracks when no scrolling is necessary */
    removeTracksWhenNotUsed?: boolean;
    /** Toggle display of vertical track when no scrolling is necessary */
    removeTrackYWhenNotUsed?: boolean;
    /** Toggle display of horizontal track when no scrolling is necessary */
    removeTrackXWhenNotUsed?: boolean;
    /** Disable scrolling horizontally */
    noScrollX?: boolean;
    /** Disable scrolling vertically */
    noScrollY?: boolean;
    /** Disable scrolling */
    noScroll?: boolean;
    /** Gradient start color */
    thumbStartColor?: string | InfluxColors;
    /** Gradient end color */
    thumbStopColor?: string | InfluxColors;
    /** Hide scrollbar when not actively scrolling */
    autoHide?: boolean;
    /** Scroll container will grow to fit the content width and height */
    autoSize?: boolean;
    /** Scroll container will grow to fit the content width */
    autoSizeWidth?: boolean;
    /** Scroll container will grow to fit the content height */
    autoSizeHeight?: boolean;
    /** Vertical scroll position in pixels */
    scrollTop?: number;
    /** Horizontal scroll position in pixels */
    scrollLeft?: number;
    /** Function to be called when called scroll event fires */
    onScroll?: FusionScrollHandler;
    /** Function called after component updated */
    onUpdate?: FusionScrollHandler;
    /** Component Size **/
    size?: ComponentSize;
}
export declare const DapperScrollbars: FunctionComponent<DapperScrollbarsProps>;
export {};
