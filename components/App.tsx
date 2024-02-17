import { React, useState } from "../deps.ts";
import { getLines } from "../util.ts";
import Editor from "./Editor.tsx";
import { TextFragment } from "./TextareaWithMenu.tsx";

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
  const onBracket = (select: TextFragment) => {
    const change = {
      target: {
        value: select.prefix + "[" + select.selection + "]" + select.suffix,
      },
    };
    return change;
  };
  const onBold = (select: TextFragment) => {
    const change = {
      target: {
        value: select.prefix + "**" + select.selection + "**" + select.suffix,
      },
    };
    return change;
  };
  const textPopupHandlers = [
    { name: "[link]", handler: onBracket },
    { name: "**bold**", handler: onBold },
  ];
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

  return (
    <div>
      <h1>simple-inline-editor</h1>
      <Editor
        initialLines={initialLines}
        linePopupHandlers={linePopupHandlers}
        textPopupHandlers={textPopupHandlers}
        keywords={keywords}
        blockStyles={blockStyles}
        onChange={(lines) => setContents(lines)}
      />
    </div>
  );
};
