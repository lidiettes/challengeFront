import React from 'react'
import ImageGif from '../components/ImageGif/ImageGif';
import useApi from '../hooks/useApi';



const CatPage = () => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AW7rYJHKSTF3fNk7FkhNNnvAUw2RGT00&q=cat&limit=16`;

    const { loading, data } = useApi(url);


    return (
        <>
        
        <div className='containerCard'>
            {
                loading ? 
                data.map(img => (
                    <ImageGif 
                    key={img.id}
                    title={img.title} 
                    url ={img.images.downsized_medium.url}
                    />
                ))
                :""
            }
           
           </div>
            
          
        </>

    )
}

export default CatPage