import React, { useState } from 'react'
import style from "./Search.module.css"

const AddCategory = ({ setCategory }) => {
    const [value, setValue] = useState("")
    const [error, setError] =  useState("")


    const searchGif = e => {
        e.preventDefault();
        if(value===""){
            setError(true);
            return;

        }
        setError(false);
        setCategory(value);
        setValue("")
    }

    return (
        <>
            <h3>Search your favourite meme</h3>
            <form className={style.searchContainer} onSubmit={searchGif}>
                <input className={style.inputSearch} type="text" placeholder='Search...' onChange={(e)=> setValue(e.target.value)} value={value}/>
            </form>

            {error ? <p>The field cannot be empty</p> : ""}
        </>


    )
}

export default AddCategory