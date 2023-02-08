import React from 'react'
import useApi from '../../hooks/useApi';
import ImageGif from '../ImageGif/ImageGif';
import style from "./ContainerGif.module.css"

const ContainerGif = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AW7rYJHKSTF3fNk7FkhNNnvAUw2RGT00&q=${category}&limit=16`;

    const { loading, data } = useApi(url);


    return (
        <>
        
        <div className={style.ContainerCard}>
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
            
            <div>{category}</div>
        </>

    )
}

export default ContainerGif