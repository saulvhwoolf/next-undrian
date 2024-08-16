import React from 'react'

const Panel = ({ content, style }) => {
    return (
        <div className="panel" style={style}>
            {content}
        </div>
    )
}

export default Panel
