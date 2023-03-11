import { FC } from 'react';
import { ComponentStatus, DropdownMenuTheme, StandardFunctionProps } from '../../../Types';
import '../ScrollBarStyles.scss';
import './TypeAheadDropDownStyles.scss';
export interface SelectableItem {
    id: string;
    name?: string;
}
interface OwnProps extends StandardFunctionProps {
    items: SelectableItem[];
    onSelect: (item: SelectableItem | null) => void;
    /** what shows in the input when nothing is selected */
    placeholderText?: string;
    /** used for generating test ids */
    testIdSuffix?: string;
    /**optional pre-selected option, must match exactly (name and id) an item in the items array */
    selectedOption?: SelectableItem | null;
    /** which theme to apply */
    menuTheme?: DropdownMenuTheme;
    buttonTestId?: string;
    menuTestID?: string;
    itemTestIdPrefix?: string;
    /** the name/label to show in the dropdown where there is an item with an id but without a name; defaults to the empty string */
    defaultNameText?: string;
    sortNames?: boolean;
    /** status state: default, loading, or disabled */
    status?: ComponentStatus;
}
export declare const TypeAheadDropDown: FC<OwnProps>;
export {};
