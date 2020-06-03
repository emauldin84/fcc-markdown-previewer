import React, {useState, useEffect} from 'react';
import './App.css';

import marked from 'marked'

function App() {
  const [preview, setPreview] = useState('')
  const [text, setText] = useState(defaultText)

  useEffect(() => {
    handleSetPreview(text)
  }, [])

  const handleSetPreview = (text) => {
    let mark = marked(text)
    console.log(mark)
    setPreview(mark)
  }

  const handleSetText = (e) => {
    setText(e.target.value)
    handleSetPreview(e.target.value)
  }

  return (
    <div className="App">
      <textarea onChange={handleSetText} value={text} rows="20" cols="80"/>
      <div dangerouslySetInnerHTML={{__html: preview}}/>
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
```block code``` \n\
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
