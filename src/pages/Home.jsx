import React, { useState } from 'react'
import AddCategory from '../components/Search/Search';
import ContainerGif from '../components/ContainerGif/ContainerGif';

const GIPHY_API_KEY = "AW7rYJHKSTF3fNk7FkhNNnvAUw2RGT00"

const Home = () => {

    const [catFactGiphy, setCatFactGiphy] = useState('');
    const [category, setCategory] = useState("")


    return (
        <div className='container'>
            <h2>
                <AddCategory
                    setCategory={setCategory}
            
                />
                <ContainerGif 
                category ={category}
                />
            </h2>
            <img src={catFactGiphy} />
           
        </div>
    )
}

export default Home