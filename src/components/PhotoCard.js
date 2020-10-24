import React from 'react'

export default function PhotoCard({ photo, pointer, scale, open, caption, handleClick }) {
    //<img src={photo.src.landscape} alt="Landscape" />
    //<h3>{photo.photographer}</h3>
    return (
        <div className="card_item">
            <img src={photo.src.landscape} alt="Landscape" onClick={() => handleClick(photo.caption)} />
            <h3>{photo.photographer}</h3>
            <div className='modal' style={{opacity: open, pointerEvents: pointer}}>
                <img 
                src={photo.src.original} 
                alt="Full" 
                className='full_image' 
                style={{transform:'scale'(scale)}}
                />
                <p>{caption}</p>
            </div>
        </div>
    )
}
