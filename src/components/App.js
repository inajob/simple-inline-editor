import React, { useState } from 'react'
import {getLines} from '../utils/util'
import Editor from './Editor'

const App = (props) => {
  const [lines, setLines] = useState([
       "# heading1",
        "## heading2",
        "### heading3",
        "body",
        "- list",
        "  - list",
        "```code\nalert('test')",
        "```table\naa,bb,cc\n11,22,33",
        ""
  ])

  // == Line Popup Handlers ============================
  const linePopupHandlers = [
    {name: "alert", handler: (range) => {
      const start = range[0]
      const end = range[1]
      // TODO: when lines is block, this way doesn't calc indent.
      alert(lines.slice(start, end + 1).join("\n"))
    }},
    {name: "alert2", handler: () => {alert("test2-1")}},
  ]

  // == Text Popup Handlers ============================
  const onBracket = (select) => {
    const change = {target: {value: select.prefix + "[" + select.selection + "]" + select.suffix}}
    return change
  }
  const onBold = (select) => {
    const change = {target: {value: select.prefix + "**" + select.selection + "**" + select.suffix}}
    return change
  }
  const textPopupHandlers = [
    {name: "[link]", handler: onBracket},
    {name: "**bold**", handler: onBold},
  ]
  // == block styles ============================
  const csvToTable = (body) => {
    const rows = []
    const lines = getLines(body)
    lines.forEach((l, tri) => {
      const cellElms = []
      const cells = l.split(/\s*,\s*/)
      cells.forEach((cell, tdi) => {
        cellElms.push(<td key={tdi}>{cell}</td>)
      })
      rows.push(<tr key={tri}>{cellElms}</tr>)
    })
    return (
      <table>{rows}</table>
    )
  }
  const blockStyles = {
    table: csvToTable
  }
  // == keywords ============================
  const keywords = [
    "hello",
    "world",
    "word",
    "wonderful",
  ]
  // ============================

  return (
    <div>
	    <h1>simple-inline-editor</h1>
      <Editor
      linePopupHandlers={linePopupHandlers}
      textPopupHandlers={textPopupHandlers}
      keywords = {keywords}
      setLines={setLines}
      blockStyles={blockStyles}
      lines={lines} />
    </div>
  )
}

export default App
