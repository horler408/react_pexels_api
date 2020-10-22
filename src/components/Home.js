import React, { useEffect } from 'react'
import { createClient } from 'pexels';

export default function Home() {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const API_KEY = '563492ad6f91700001000001078da128e4d741aab9817271ae708059'
    const BASE_URL = `https://api.pexels.com/v1`

    const getData = () => {
        const client = createClient(API_KEY)
        const query = 'Nature'

        client.photos.search({ query, per_page: 10 }).then(photos => {
        //const data = photos.split(0, 12)
        console.log(photos)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            
        </div>
    )
}
