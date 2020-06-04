import React from 'react'

const Editor = ({handleSetText, text, setText, setPreview}) => {
    const clearEditor = () => {
        setText('')
        setPreview('')
    }
    return (
        <div className="editorContainer">
            <div className='headerContainer'>
                <p className='title'>Editor</p>
                <p className='clear' onClick={clearEditor}>clear editor</p>
            </div>
            <textarea id="editor" onChange={handleSetText} value={text} rows="20" cols="80"/>
        </div>
    )
}

export default Editor

