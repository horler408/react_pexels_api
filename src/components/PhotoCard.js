import React from 'react';
import { Link } from 'react-router-dom';

//<h3>{photo.photographer}</h3>
export default function PhotoCard({ id, photo, pointer, scale, open, caption, removeModal, handleClick }) {
    return (
        <div className="card_item">
            <Link to={`/${id}`}>
                <img 
                    src={photo.src.landscape}
                    className="card_image" 
                    alt="Landscape" 
                    onClick={() => handleClick(photo.photographer)} 
                />
            </Link>
            
            <div className='modal'
                onClick={removeModal} 
                style={{opacity: open, pointerEvents: pointer}}
            >
                <img 
                    src={photo.src.original} 
                    alt="Full" 
                    className='full_img' 
                    style={{transform: scale}}
                />
                <p className="caption">Photographer: {caption}</p>
            </div>
        </div>
    )
}
