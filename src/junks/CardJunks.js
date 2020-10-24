import React from 'react'

export default function PhotoCard({ photo, pointer, scale, open, caption, handleClick }) {
    return (
        <div className="card_item">
            <img src={photo.img} alt="Preview" onClick={() => handleClick(photo.caption)} />
            <h3>text</h3>
            <div className='modal' style={{opacity: open, pointerEvents: pointer}}>
                <img 
                src={photo.img_full} 
                alt="Full" 
                className='full_image' 
                style={{transform:'scale'(scale)}}
                />
                <p>{caption}</p>
            </div>
        </div>
    )
}
