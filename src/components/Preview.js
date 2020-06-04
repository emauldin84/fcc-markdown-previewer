import React from 'react'

const Preview = ({preview}) => {
    return (
        <div className="previewContainer">
            <div className='headerContainer previewHeaderContainer'>
                <p className='title'>Previewer</p>
            </div>
            <div id="preview" dangerouslySetInnerHTML={{__html: preview}}/>
        </div>
    )
}

export default Preview