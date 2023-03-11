import { PureComponent } from 'react';
import { IconFont } from '../../Types';
import './SubwayNav.scss';
export interface SubwayNavModel {
    glyph: IconFont;
    name: string;
    isComplete?: boolean;
}
interface OwnProps {
    currentStep: number;
    navigationSteps: SubwayNavModel[];
    onStepClick: (step: number) => void;
    settingUpIcon: JSX.Element;
    settingUpText: string;
    setupTime?: string;
    settingUpHeader?: string;
    showCheckmark?: boolean;
}
export declare class SubwayNav extends PureComponent<OwnProps> {
    private handleClick;
    render(): JSX.Element;
}
export {};
