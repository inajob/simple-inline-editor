import { useState } from 'react'
import { getLines } from "../util.ts";
import Editor from "./Editor.tsx";
import { TextFragment, TextChangeRequest } from "./TextareaWithMenu.tsx";

// == block styles ============================
const csvToTable = (body: string) => {
  const rows: React.JSX.Element[] = [];
  const lines = getLines(body);
  lines.forEach((l, tri) => {
    const cellElms: React.JSX.Element[] = [];
    const cells = l.split(/\s*,\s*/);
    cells.forEach((cell, tdi) => {
      cellElms.push(<td key={tdi}>{cell}</td>);
    });
    rows.push(<tr key={tri}>{cellElms}</tr>);
  });
  return <table>{rows}</table>;
};
const blockStyles = {
  table: csvToTable,
};

export const App: React.FC = () => {
  const [, setContents] = useState<string[]>([]);

  // == Line Popup Handlers ============================
  const linePopupHandlers = [
    {
      name: "alert",
      handler: (lines: string[]) => {
        // TODO: when lines is block, this way doesn't calc indent.
        alert(lines.join("\n"));
      },
    },
    {
      name: "alert2",
      handler: () => {
        alert("test2-1");
      },
    },
  ];

  // == Text Popup Handlers ============================
  const onBracket = (select: TextFragment|null) => {
    if(!select){
      throw new Error("select is null")
    }
    const part = select.prefix + "[" + select.selection + "]";
    const change:TextChangeRequest = {
      value: part + select.suffix,
      column: part.length
    };
    return change;
  };
  const onBold = (select: TextFragment|null) => {
    if(!select){
      throw new Error("select is null")
    }  const part = select.prefix + "**" + select.selection + "**";
    const change = {
      value: part + select.suffix,
      column: part.length
    };
    return change;
  };
  const textPopupHandlers = [
    { name: "[link]", handler: onBracket },
    { name: "**bold**", handler: onBold },
  ];

  // == keywords ============================
  const keywords = [
    "hello",
    "world",
    "word",
    "wonderful",
    "日本語",
  ];
  // ============================

  const initialLines = [
    "# heading1",
    "## heading2",
    "### heading3",
    "body",
    "- list",
    "  - list",
    "```code\nalert('test')",
    "```table\naa,bb,cc\n11,22,33",
    "",
  ];
  const [lines, setLines] = useState(initialLines);

  return (
    <div>
      <h1>simple-inline-editor</h1>
      <Editor
        lines={lines}
        setLines={setLines}
        linePopupHandlers={linePopupHandlers}
        textPopupHandlers={textPopupHandlers}
        keywords={keywords}
        blockStyles={blockStyles}
        onChange={(lines) => setContents(lines)}
      />
    </div>
  );
};
