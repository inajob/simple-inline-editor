import React from 'react'
import Editor from './Editor'

const App = () => (
  <div>
	  <h1>simple-inline-editor</h1>
    <Editor lines={["# heading1","## heading2","### heading3", "body"]} />
  </div>
)

export default App
