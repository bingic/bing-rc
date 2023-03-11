import React, { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import './Toggle.scss';
import { Omit, ComponentColor, ComponentSize, IconFont, StandardFunctionProps, InputToggleType, Appearance } from '../../Types';
/**
 *  To have a clickable label (clicking on the label clicks/unclicks the toggle) add a 'htmlFor'
 *  property to the label that matches the buttonId.
 *
 *  for example:
 *
 *    <Toggle
 *       tabIndex={2}
 *       value="vertical"
 *       id="vertical-legend-orientation"
 *       name="lengendOr"
 *       checked={legendOrientation === LEGEND_ORIENTATION_THRESHOLD_VERTICAL}
 *       onChange={() =>
 *                handleSetOrientation(LEGEND_ORIENTATION_THRESHOLD_VERTICAL)
 *              }
 *       type={InputToggleType.Radio}
 *       size={ComponentSize.ExtraSmall}
 *       color={ComponentColor.Primary}
 *       appearance={Appearance.Outline}
 *       >
 *       <InputLabel
 *            active={legendOrientation === LEGEND_ORIENTATION_THRESHOLD_VERTICAL}
 *            htmlFor="vertical-legend-orientation"
 *         >
 *           Vertical
 *      </InputLabel>
 *  </Toggle>
 *
 * and all radiobuttons in the same group should have the same name, as well.
 *
 *
 * */
export interface ToggleProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for this toggle */
    id: string;
    /** Determines whether checkbox is checked */
    checked?: boolean;
    /** Choose either "Radio" or "Checkbox" */
    type: InputToggleType;
    /** Function to be called on change */
    onChange: (value?: string) => void;
    /** Function to be called on focus loss */
    onBlur?: (e?: ChangeEvent<HTMLLabelElement>) => void;
    /** Function to be called on focus gain */
    onFocus?: (e?: ChangeEvent<HTMLLabelElement>) => void;
    /** Function to be called on key press */
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Function to be called on key up */
    onKeyUp?: (e: KeyboardEvent<HTMLLabelElement>) => void;
    /** Function to be called on key down */
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Icon to be displayed to the left of text */
    icon?: IconFont;
    /** Keyboard control tab order  */
    tabIndex?: number;
    /** Used to group toggles together in a form */
    name?: string;
    /** Togle field value to be updated with 'on X' functions */
    value?: string;
    /** Text to be displayed on hover tooltip */
    titleText?: string;
    /** Text to be displayed on hover tooltip when radio button is disabled */
    disabledTitleText?: string;
    /** Toggle Component size */
    size?: ComponentSize;
    /** Prevents the user from interacting with this component */
    disabled?: boolean;
    /** Whether or not the input receives autofocus when mounted */
    autoFocus?: boolean;
    /** Refers to the visible element rather than the hidden input that ref refers to */
    containerRef?: RefObject<ToggleContainerRef>;
    /** Controls color of toggle */
    color?: ComponentColor;
    /** Deprecated */
    appearance?: Appearance;
    /** Renders the toggle as "Solid" */
    fill?: Appearance;
}
export type ToggleRef = HTMLInputElement;
export type ToggleContainerRef = HTMLDivElement;
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
