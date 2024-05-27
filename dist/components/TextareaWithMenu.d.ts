import React from "react";
export interface TextPopupHandler {
    name: string;
    handler: (select: TextFragment | null) => TextChangeRequest;
}
export interface TextFragment {
    prefix: string;
    selection: string;
    suffix: string;
}
export interface TextChangeRequest {
    value: string;
    column: number;
}
export interface TextareaWithMenuProps {
    value: string;
    keywords: string[];
    popupHandlers: TextPopupHandler[];
    onMagicFunc: (() => void);
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown: (select: TextFragment) => React.KeyboardEventHandler<HTMLTextAreaElement>;
    onCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement>;
    onCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement>;
    onPaste?: React.ClipboardEventHandler<HTMLTextAreaElement>;
    setLine: (select: string) => void;
    setCursor: (col: number) => void;
    className?: string;
}
export declare const TextareaWithMenu: React.ForwardRefExoticComponent<TextareaWithMenuProps & React.RefAttributes<HTMLTextAreaElement>>;
