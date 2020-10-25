import React from 'react'

export default function CardJunks({ photo, pointer, scale, open, caption, removeModal, handleClick }) {
    return (
        <div className="card_item">
            <img 
                src={photo.img} 
                className="card_image" 
                alt="Preview" 
                onClick={() => handleClick(photo.caption)} />
            <div className='modal' 
                onClick={removeModal} 
                style={{opacity: open, pointerEvents: pointer}}
            >
                <img 
                    src={photo.img_full} 
                    alt="Full" 
                    className='full_img' 
                    style={{transform: scale}}
                />
                <p className="caption">{caption}</p>
            </div>
        </div>
    )
}
