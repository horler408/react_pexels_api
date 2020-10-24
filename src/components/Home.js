import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels';
import PhotoCard from './PhotoCard'
import Modal from './Modal'

export default function Home() {
    const API_KEY = '563492ad6f91700001000001078da128e4d741aab9817271ae708059'

    const [photos, setPhotos] = useState([])
    const [open, setOpen] = useState(false)
    const [caption, setCaption] = useState('')

    const getData = () => {
        const client = createClient(API_KEY)
        const query = 'Nature'

        client.photos.search({ query, per_page: 30 }).then(data => {
        const photos = data.photos
        console.log(photos)
        setPhotos(photos)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleModal = () => {
        
    }

    return (
        <>
            <div className="card_container">
                {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
            <div className="modal_container">
                {photos.map(photo => (
                    <Modal key={photo.id} photo={photo} caption={caption} />
                ))}
            </div>
        </>
    )
}
