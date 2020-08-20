import React from 'react';

const Modal = ({selectedImage, setSelectedImage}) => {

    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedImage(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="enlarged pic"/>
        </div>
    )
}

export default Modal;
