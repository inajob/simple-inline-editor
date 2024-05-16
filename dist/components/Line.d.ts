/// <reference types="react" />
import { TextPopupHandler } from "./TextareaWithMenu.tsx";
export interface LineProps {
    value: string;
    row: number;
    key_debug: number;
    isFocus: boolean;
    isSelect: boolean;
    keywords: string[];
    blockStyles: Record<string, (body: string) => React.JSX.Element>;
    textPopupHandlers: TextPopupHandler[];
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onLinkClick: ((title: string) => void);
    onSubLinkClick: ((title: string) => void);
    onChange: (prefix: string) => React.ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown: (prefix: string, value: string) => React.KeyboardEventHandler<HTMLTextAreaElement>;
    onCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement>;
    onCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement>;
    onPaste: (row: number) => React.ClipboardEventHandler<HTMLTextAreaElement>;
    setLine: (prefix: string) => (select: string) => void;
    setCursor: (col: number) => void;
    selectThisLine: () => void;
}
export declare const Line: import("react").ForwardRefExoticComponent<LineProps & import("react").RefAttributes<HTMLTextAreaElement>>;
