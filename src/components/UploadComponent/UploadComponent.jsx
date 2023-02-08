import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import style from "./UploadComponent.module.css"
import { Container } from 'reactstrap'
import axios from 'axios'


const UploadComponent = (props) => {
    console.log(hola)

    const [image, setImage] = useState({ array: {} })
    const [loading, setLoading] = useState("")

    const handleDrop = (files) => {
        const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append("image", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "Learning");
            formData.append("api_key", "536373466399215");
            formData.append("timestamp", (Date.now() / 1000) | 0);
            setLoading("true");
            console.log(file)
            return axios
                .post("https://api.cloudinary.com/v1_1/dfz4bu04u/image/upload", formData, {
                    headers: { "X-Requested-With": "XMLHttpRequest" },
                })
                .then((res) => {
                    const data = res.data
                    console.log(data)
                    const fileURL = data.secure_url;
                    console.log(fileURL)
                })
        })

        axios.all(uploaders).then(() => {
            setLoading("false")
        })
    }

    return (
        <>
            <div>
                <Container>
                    <Dropzone
                        className={style.dropzone}
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        onDrop={handleDrop}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps({ className: "dropzone" })}>
                                    <input {...getInputProps()} />
                                    <p>Pincha aqui y sube tus imagenes</p>

                                </div>
                            </section>
                        )}

                    </Dropzone>
                </Container></div>

        </>



    )
}

export default UploadComponent