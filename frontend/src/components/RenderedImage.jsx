import React from "react";

const RenderedImage = ({ arrayBuffer }) => {
    const blob = new Blob([arrayBuffer])
    const imgSrc = URL.createObjectURL(blob);
    return (
        <img style={{ maxHeight: '240px' }} src={imgSrc} />
    )
}

export default RenderedImage