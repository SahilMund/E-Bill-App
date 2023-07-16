import React, { useState } from 'react'
import { ImageGrid, Modal, Title, UploadForm } from '../components';

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [darkmode,setDarkmode] = useState(false);
    return (
  
      <div className={darkmode ? "galleryHome darkmode" : "galleryHome" }>
    
      <Title darkmode={darkmode} setDarkmode={setDarkmode}/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    );
}

export default GalleryPage