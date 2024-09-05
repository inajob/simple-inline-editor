import { BlockStyleHandler } from './Line.tsx';
import { TextPopupHandler, Keyword } from './TextareaWithMenu.tsx';

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
    onMagicFunc: ((row: number) => () => void);
    textPopupHandlers: TextPopupHandler[];
    linePopupHandlers: LinePopupHandler[];
    keywords: Keyword[];
    blockStyles: Record<string, BlockStyleHandler>;
}
export declare const Editor: React.FC<EditorProps>;
export default Editor;
