import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { getLines } from "../util.ts";
import Editor, { LinePopupHandler } from "./Editor.tsx";
import { BlockStyleHandler, InlineStyleHandler } from "./Line.tsx";
import { TextFragment, TextChangeRequest } from "./TextareaWithMenu.tsx";

// == block styles ============================
const csvToTable:BlockStyleHandler = (body, setRenderElement) => {
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
  
  //const p = (new Promise((resolve) => {
    setTimeout(() => {
      console.log("fire")
      setRenderElement(<table><tbody>{rows}</tbody></table>);
    },5000)
  //}));
  //console.log(p)
  //throw p;
  
  return <table><tbody>{rows}</tbody></table>;
};
const blockStyles = {
  table: csvToTable,
};

// == inline styles ============================

const inlineStyleRed:InlineStyleHandler = (body:string) => {
  return <span style={{"color":"red"}}>{body}</span>
}

const inlineStyles = {
  red: inlineStyleRed,
}


export const App: React.FC = () => {
  const content = useRef<string[]>([]);

  // == Line Popup Handlers ============================
  const linePopupHandlers: LinePopupHandler[] = [
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
    {
      name: "delete",
      handler: (_, range) => {
        if(range == undefined){
          throw "range is undefined"
        }
        setLines((prevLines) => {
          prevLines.splice(range[0], range[1] - range[0] + 1)
          return prevLines
        })
      }
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
  const [keywords, setKeywords] = useState([
    "hello",
    "world",
    "word",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "wonderful",
    "日本語",
  ]);
  // ============================

  const frontPageTemplate = [
    "# サンプルテキスト",
    "## 見出し2",
    "### 見出し3",
    "body",
    "- 箇条書き",
    "  - 箇条書き",
    "- [リンク]",
    "- {{red red}}, {{red red}}",
    "```code\n//ソースコード的なもの\nalert('test')",
    "```table\n表組,の,デモ\n11,22,33",
    "",
  ];
  const [title, setTitle] = useState("FrontPage");
  const loadedPage = localStorage.getItem("PAGE:FrontPage")
  let initialLines = frontPageTemplate
  if(loadedPage != null){
    initialLines = JSON.parse(loadedPage)
  }
  console.log(initialLines)
  const [lines, setLines] = useState(initialLines.map((l,i) => {return {key:i, body:l}}));

  const makeKeywords = useCallback(() => {
    setKeywords(Object.keys(localStorage).filter((s) => s.indexOf("PAGE:") == 0).map((s) => s.slice("PAGE:".length)))
  },[])

  useEffect(() => {
    window.addEventListener("popstate", function() {
      let hash = this.document.location.search;
      if(hash[0] == "?"){
        hash = decodeURIComponent(hash.slice(1))
      }
      if(hash == ""){
        hash = "FrontPage"
      }
      jump(hash, false)
    });
  },[])

  useEffect(() => {
    console.log("Save", content.current)
    localStorage.setItem("PAGE:" + title, JSON.stringify(content.current))
    makeKeywords()
    //setInPrepareing(false)
  }, [content, title, makeKeywords])

  const jump = (title:string, go:boolean) => {
    console.log("jump", title)
    if(go){
      history.pushState({}, "", "?"+title)
    }
    const pageData = localStorage.getItem("PAGE:" + title)
    setTitle(title)
    if(pageData == null){
      setLines([{body: "# " + title, key: 0}, {body: "新しいページです", key: 1}])
    }else{
      setLines(JSON.parse(pageData))
    }
  }

  const deletePage = () => {
    localStorage.removeItem("PAGE:" + title)
    jump("FrontPage", true)
  }
  const resetAll = () => {
    localStorage.clear()
    localStorage.setItem("PAGE:FrontPage", JSON.stringify(frontPageTemplate))
    jump("FrontPage", true)
  }
  const clickHandler = useCallback((title: string) => {
    jump(title, true)
  },[])

  return (
    <div>
      <h1>simple-inline-editor</h1>
      <h2>{title}</h2>
      <ul className="menu">
        <li onClick={deletePage}>DeletePage</li>
        <li onClick={resetAll}>ResetAll</li>
      </ul>
      <Editor
        lines={lines}
        setLines={setLines}
        linePopupHandlers={linePopupHandlers}
        textPopupHandlers={textPopupHandlers}
        keywords={useMemo(() => keywords.map((k) => { return { value: k, style: "red" }; }), [keywords])}
        inlineStyles={inlineStyles}
        blockStyles={blockStyles}
        onChange={(lines) => { content.current = lines; } }
        onLinkClick={clickHandler}
        onSubLinkClick={clickHandler}
        onMagicFunc={(row) => () => { console.log("magic" + row); } }
        onUploadImage={function (blob: File, row: number) {
          alert("upload image" +  blob + ", row:" + row);
          console.log(blob, row)
        } }      />
    </div>
  );
};
