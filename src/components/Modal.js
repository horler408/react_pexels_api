import React from 'react'

export default function Modal({photo}) {
    return (
        <div className="modal">
            <img src={photo.src.original} alt="Modal" className="full_image" />
        </div>
    )
}
