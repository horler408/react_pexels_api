import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';

export default function Details({match}) {
    const API_KEY = '563492ad6f91700001000001078da128e4d741aab9817271ae708059'
    console.log(match);
    const params = match.params.id

    const [detail, setDetail] = useState({})

    useEffect(() => {
        const getData = () => {
            const client = createClient(API_KEY)
            const query = 'Nature'
    
            client.photo.search({ query, id: params }).then(data => {
            const photo = data.photo
            console.log(photo)
            setDetail(photo)
            })
        }
        getData()
    }, [params])

    return (
        <div className="page__container">
            <h1>{detail.photographer}</h1>
        </div>
    )
}
