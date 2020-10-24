import React, { useEffect, useState } from 'react'
import img from './../images/img1_preview.jpg'
import img_full from './../images/img1_full.jpg'
import { createClient } from 'pexels';
import PhotoCard from './PhotoCard'

export default function Home() {
    const data = [
        {id: 0, caption:'Image 1', img: img, img_full: img_full},
        {id: 1, caption:'Image 2', img: img, img_full: img_full},
        {id: 2, caption:'Image 3', img: img, img_full: img_full},
        {id: 3, caption:'Image 4', img: img, img_full: img_full}
    ]

    const API_KEY = '563492ad6f91700001000001078da128e4d741aab9817271ae708059'

    const [photos, setPhotos] = useState([])
    const [opacity, setOpacity] = useState(0)
    const [caption, setCaption] = useState('')
    const [pointer, setPointer] = useState('none')
    const [scale, setScale] = useState(0.5)


    useEffect(() => {
        setPhotos(data)
    }, [data])

    const handleModal = (text) => {
        setOpacity(1)
        setCaption(text)
        setPointer('all')
        setScale(1)
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
                    photo={photo} 
                    />
                ))}
            </div>
        </>
    )
}
