import { ReactElement } from 'react';

export interface ILink {
    text: string;
    path: string;
}

export interface IButton {
    disabled: boolean;
    onClick: () => void;
    text: string;
}

export interface IInput {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    isValid: boolean;
    type?: string;
}

export interface ITextArea extends IInput {
    cols: number;
    rows: number;
}

export interface IMainLayoutProps {
    children: ReactElement;
    title?: string;
    keywords?: string[];
    description?: string;
}
