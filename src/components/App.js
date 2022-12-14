import React from 'react'
import Editor from './Editor'

const App = () => (
  <div>
	  <h1>simple-inline-editor</h1>
    <Editor lines={
      [
        "# heading1",
        "## heading2",
        "### heading3",
        "body",
        "- list",
        "  - list",
        "```code\nalert('test')",
        "```table\naa,bb,cc\n11,22,33",
        ""]
    } />
  </div>
)

export default App
