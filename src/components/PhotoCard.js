import React from 'react'

export default function PhotoCard({ photo }) {
    return (
        <div className="card_item">
            <h1>{photo.photographer}</h1>
            <img src={photo.src.landscape} alt="Landscape" />
        </div>
    )
}
