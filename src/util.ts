export function isBlock(s: string, isMatch: true): RegExpMatchArray | null;
export function isBlock(s: string, isMatch?: false): boolean;
export function isBlock(
  s: string,
  isMatch?: boolean,
): RegExpMatchArray | boolean | null {
  const m = s.match(/^(\s*)(```|> )/); //```
  if (isMatch === true) {
    return m;
  }
  if (m != null) {
    return true;
  }
  return false;
}
export const isComment = (s: string) => {
  const m = s.match(/^(\s*)> /); //```
  if (m != null) {
    return true;
  }
  return false;
};

export const getLines = (text: string) => {
  const list = text.split(/[\r\n]/);
  return list;
};
export const numLines = (s: string) => {
  return s.split(/[\r\n]/).length;
};

/** sのindex番目がx,yで何番目か調べる */
export const getCursorPos = (index: number, text: string) => {
  const list = text.split(/[\r\n]/);
  let pos = 0;
  for (let i = 0; i < list.length; i++) {
    pos += list[i].length + 1;
    if (pos > index) {
      // X, Y
      return [index - (pos - list[i].length - 1), i];
    }
  }
  throw new Error("error getPos");
};

export const isLastLine = (index: number, text: string) => {
  const pos = getCursorPos(index, text);
  const n = numLines(text);
  return pos[1] === n - 1;
};

export const isFirstLine = (index: number, text: string) => {
  const pos = getCursorPos(index, text);
  return pos[1] === 0;
};

export const parseBlock = (text: string): [string | undefined, string] => {
  const m = text.match(/^\s*`{3}(.*)/); //`
  const blockBody = getLines(text).slice(1).join("\n");
  const blockType = m?.[1];
  return [blockType, blockBody];
};
