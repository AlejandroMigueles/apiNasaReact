import React from 'react'

//*hooks
import useGetData from '../hooks/useGetData'

const Card = () => {
    let date="2022-08-01";
    const llave ="LaGPMlduzTpkvuVL2oMl1f1AaT1iPNY8J0NEAi0R"
    const photos=useGetData(`https://api.nasa.gov/planetary/apod?api_key=${llave}&date=${date}`)
return (
    <div className='photoContainer container'>
        <div className='container photoDay'>
            <h2>{photos.title}</h2>
            <img loading='lazy' src={photos.url} className='card-img-top' alt={photos.title}  width={10}/>
            <p className='container'>Fotografia de: {photos.copyright}</p>
        </div>
        <div className='description'>
            <h3>Explanation</h3>
            <p>{photos.explanation}</p>
        </div>
    </div>
)
}

export default Card