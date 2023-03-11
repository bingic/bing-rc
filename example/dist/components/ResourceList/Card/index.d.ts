import React, { Component } from 'react';
import { ResourceCardProps } from './ResourceCard';
export declare class ResourceCard extends Component<ResourceCardProps> {
    static readonly displayName = "ResourceCard";
    static ResourceCard: React.ForwardRefExoticComponent<ResourceCardProps & React.RefAttributes<HTMLDivElement>>;
    static Name: React.ForwardRefExoticComponent<import("./ResourceCardName").ResourceCardNameProps & React.RefAttributes<HTMLDivElement>>;
    static EditableName: React.ForwardRefExoticComponent<import("./ResourceCardEditableName").ResourceCardEditableNameProps & React.RefAttributes<HTMLDivElement>>;
    static Description: React.ForwardRefExoticComponent<import("./ResourceCardDescription").ResourceCardDescriptionProps & React.RefAttributes<HTMLDivElement>>;
    static EditableDescription: React.ForwardRefExoticComponent<import("./ResourceCardEditableDescription").ResourceCardEditableDescriptionProps & React.RefAttributes<HTMLDivElement>>;
    static Meta: React.ForwardRefExoticComponent<import("./ResourceCardMeta").ResourceCardMetaProps & React.RefAttributes<HTMLDivElement>>;
    render(): JSX.Element;
}
export { ResourceCardProps, ResourceCardRef } from './ResourceCard';
export * from './ResourceCardName';
export * from './ResourceCardEditableName';
export * from './ResourceCardDescription';
export * from './ResourceCardEditableDescription';
export * from './ResourceCardMeta';
