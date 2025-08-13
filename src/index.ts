import {Editor} from './components/Editor.tsx'
import {InlineStyleHandler,BlockStyleHandler} from './components/Line.tsx'
import { TextFragment, TextChangeRequest } from "./components/TextareaWithMenu.tsx";
import { isBlock, parseBlock } from "./util.ts"
import './index.css'
export {
    Editor,
    isBlock,
    parseBlock,
};
export type {
    TextFragment,
    TextChangeRequest,
    BlockStyleHandler,
    InlineStyleHandler,
};
