import React from 'react'

export default function PhotoCard({ photo }) {
    return (
        <div className="card_item">
            <img src={photo.src.landscape} alt="Landscape" />
            <h3>{photo.photographer}</h3>
        </div>
    )
}
