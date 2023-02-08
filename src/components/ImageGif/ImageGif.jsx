import style from "./ImageGif.module.css"

const ImageGif = ({ title, url }) => {
    console.log(title)
    return (

        <>
        
            <div className={style.card}>
                <img className={style.cardImage} src={url} alt={title} />
                
                <h2 className={style.cardTitle}>{title}</h2>
            </div>

        </>




    )
}

export default ImageGif