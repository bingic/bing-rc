import React, { Component } from 'react';
import { FormProps } from './Form';
export declare class Form extends Component<FormProps> {
    static readonly displayName = "Form";
    static Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
    static Box: React.ForwardRefExoticComponent<import("./FormBox").FormBoxProps & React.RefAttributes<HTMLDivElement>>;
    static Divider: React.ForwardRefExoticComponent<import("./FormDivider").FormDividerProps & React.RefAttributes<HTMLDivElement>>;
    static Element: React.ForwardRefExoticComponent<import("./FormElement").FormElementProps & React.RefAttributes<import("./FormElement").FormElementRef>>;
    static ElementError: React.ForwardRefExoticComponent<import("./FormElementError").FormElementErrorProps & React.RefAttributes<HTMLSpanElement>>;
    static Footer: React.ForwardRefExoticComponent<import("./FormFooter").FormFooterProps & React.RefAttributes<HTMLDivElement>>;
    static HelpText: React.ForwardRefExoticComponent<import("./FormHelpText").FormHelpTextProps & React.RefAttributes<HTMLSpanElement>>;
    static Label: React.ForwardRefExoticComponent<import("./FormLabel").FormLabelProps & React.RefAttributes<import("./FormLabel").FormLabelRef>>;
    static ValidationElement: React.ForwardRefExoticComponent<import("./FormValidationElement").FormValidationElementProps & React.RefAttributes<HTMLLabelElement>>;
    render(): JSX.Element;
}
export { FormProps, FormRef } from './Form';
export * from './FormBox';
export * from './FormDivider';
export * from './FormElement';
export * from './FormElementError';
export * from './FormFooter';
export * from './FormHelpText';
export * from './FormLabel';
export * from './FormValidationElement';
