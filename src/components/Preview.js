import React from 'react'

const Preview = ({preview}) => {
    return (
        <div className="previewContainer">
            <div id="preview" dangerouslySetInnerHTML={{__html: preview}}/>
        </div>
    )
}

export default Preview