/// <reference types="react" />
import { TextPopupHandler } from "./TextareaWithMenu.tsx";
export interface LinePopupHandler {
    name: string;
    handler: (lines: string[], range?: number[]) => void;
}
export interface EditorProps {
    lines: {
        body: string;
        key: number;
    }[];
    setLines: React.Dispatch<React.SetStateAction<{
        body: string;
        key: number;
    }[]>>;
    onChange: (lines: string[]) => void;
    onLinkClick: ((title: string) => void);
    onSubLinkClick: ((title: string) => void);
    textPopupHandlers: TextPopupHandler[];
    linePopupHandlers: LinePopupHandler[];
    keywords: string[];
    blockStyles: Record<string, (body: string) => React.JSX.Element>;
}
export declare const Editor: React.FC<EditorProps>;
export default Editor;
