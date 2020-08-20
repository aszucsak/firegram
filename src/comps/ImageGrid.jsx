import React from 'react';
import useFireStore from '../hooks/useFirestore';

const ImageGrid = ({setSelectedImage}) => {
    const { docs } = useFireStore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImage(doc.url)}
                >
                    <img src={doc.url} alt="document pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
