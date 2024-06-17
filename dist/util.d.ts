export declare function isBlock(s: string, isMatch: true): RegExpMatchArray | null;
export declare function isBlock(s: string, isMatch?: false): boolean;
export declare const isComment: (s: string) => boolean;
export declare const getLines: (text: string) => string[];
export declare const numLines: (s: string) => number;
/** sのindex番目がx,yで何番目か調べる */
export declare const getCursorPos: (index: number, text: string) => number[];
export declare const isLastLine: (index: number, text: string) => boolean;
export declare const isFirstLine: (index: number, text: string) => boolean;
export declare const parseBlock: (text: string) => [string | undefined, string];
export declare const parsePrefix: (s: string) => string[];
declare const _default: {};
export default _default;
