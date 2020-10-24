import React from 'react'

export default function Modal({photo, caption, opacity}) {
    return (
        <div className="modal">
            <img src={photo.src.original} alt="Modal" className="full_image" />
            <h2>{caption}</h2>
        </div>
    )
}
