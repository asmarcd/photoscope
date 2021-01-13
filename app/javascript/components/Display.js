import React, {useState, useEffect} from 'react';
import axios from 'axios';
    
const Display = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('api/v1/images.json')
        .then(res => {setImages(res.data.data)})
    })

    return (
        <div>Display goes here</div>
    )

}

export default Display;
    
