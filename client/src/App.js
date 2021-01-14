import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "./util/CloudinaryService";

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchPhotos("image", setImages)
  }, []);

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "asmarphotocloud",
      tags: [tag],
      uploadPreset: "qqu8rkik",
      folder: "shopify-submission"
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === 'success') {
          setImages([...images, photos.info.public_id])
        }
      } else {
        console.log(error);
      }
    })
  }


  return (
    <CloudinaryContext cloudName='asmarphotocloud'>
      <div className="App">
        <Header />
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <section>
          {images.map(i => <Image
            key={i}
            publicId={i}
            fetch-format="auto"
            quality="auto"
          />)}
        </section>
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
