import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels';
import PhotoCard from './../components/PhotoCard';

export default function Home() {
    const API_KEY = '563492ad6f91700001000001078da128e4d741aab9817271ae708059'

    const [photos, setPhotos] = useState([])
    const [opacity, setOpacity] = useState(0)
    const [caption, setCaption] = useState('')
    const [pointer, setPointer] = useState('none')
    const [scale, setScale] = useState(0.5)
    const [page, setPage] = useState(1)

    

    useEffect(() => {
        const getData = () => {
            const client = createClient(API_KEY)
            const query = 'Nature'
    
            client.photos.search({ query, page:page, per_page: 30 }).then(data => {
            const photos = data.photos
            console.log(photos)
            setPhotos(photos)
            })
        }
        getData()
    }, [page])

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
                    id={photo.id} 
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
            <div className='nav_btns'>
                {page > 1 ? <button className='next' onClick={() => setPage(page - 1)}>Prev</button> : ''}
                {page !== (page.length - 1) ? <button className='prev' onClick={() => setPage(page + 1)}>Next</button> : ''}
            </div>
        </>
    )
}
