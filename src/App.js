import React, {useState, useEffect} from 'react';
import './App.css';
import marked from 'marked'

import Editor from './components/Editor'
import Preview from './components/Preview'

marked.setOptions({breaks: true})

function App() {
  const [preview, setPreview] = useState('')
  const [text, setText] = useState(defaultText)

  useEffect(() => {
    handleSetPreview(text)
  }, [])

  const handleSetPreview = (text) => {
    let mark = marked(text)
    setPreview(mark)
  }

  const handleSetText = (e) => {
    setText(e.target.value)
    handleSetPreview(e.target.value)
  }

  return (
    <div className="App">
      <Editor handleSetText={handleSetText} text={text} setText={setText} setPreview={setPreview}/>
      <Preview preview={preview}/>
    </div>
  );
}

export default App;


const defaultText = "# Header \n\
## Sub Header \n\
[I'm an inline-style link](https://www.google.com) \n\
\n\
`inline code` \n\
\n\
``` \n code block \n ``` \n\
1. list item 1 \n\
2. list item 2 \n\
\n\
> block quote\n\
\n\
inline image\n\
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\
\n\
**bold text**\n\
"
