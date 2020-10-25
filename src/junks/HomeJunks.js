import React, { useState } from 'react'
import img from './../images/img1_preview.jpg'
import img_full from './../images/img1_full.jpg'
import PhotoCard from './CardJunks'

export default function HomeJunks() {
    const photos = [
        {id: 0, caption:'Image 1', img: img, img_full: img_full},
        {id: 1, caption:'Image 2', img: img, img_full: img_full},
        {id: 2, caption:'Image 3', img: img, img_full: img_full},
        {id: 3, caption:'Image 4', img: img, img_full: img_full}
    ]


    const [opacity, setOpacity] = useState(0)
    const [caption, setCaption] = useState('')
    const [pointer, setPointer] = useState('none')
    const [scale, setScale] = useState(0.5)


    const handleModal = (text) => {
        setOpacity(1)
        setCaption(text)
        setPointer('all')
        setScale(1)
    }

    const removeModal = () => {
        setOpacity(0)
        setPointer('none')
    }

    return (
        <>
            <div className="card_container">
                {photos.map(photo => (
                    <PhotoCard key={photo.id} 
                    pointer={pointer}
                    scale={scale} 
                    open={opacity} 
                    caption={caption} 
                    handleClick={handleModal}
                    removeModal={removeModal} 
                    photo={photo} 
                    />
                ))}
            </div>
        </>
    )
}
