import React from "react";
import { useState } from "react";
import RenderedImage from "./RenderedImage";

const ImageUpload = ({ fetchImages }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const onFileUpload = (e) => {
        e.preventDefault();

        if (selectedFile === null) {
            alert('Por favor faça algum upload!')
            return
        }
        
        const formData = new FormData();
        formData.append("file", selectedFile)
        fetch("http://localhost:3000/upload", { method: "POST", body: formData })
            .then(response => response.json())
            .then(() => {
                setSelectedFile(null)
                e.target.value = ''
                fetchImages()
            })

    }

    return (
        <div className="uploadForm">
            <form onSubmit={onFileUpload}>
                <input type="file" onChange={(e) => { onFileChange(e) }} />
                <input type="submit" value="Upload" />
                {selectedFile ? <RenderedImage arrayBuffer={selectedFile} /> : null}
            </form>
        </div>
    );

}

export default ImageUpload;