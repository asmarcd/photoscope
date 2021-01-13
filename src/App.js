import React, {useState} from 'react';
import Header from './components/Header';
import UploadBtn from './components/UploadBtn';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import { CloudinaryContext } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "./util/CloudinaryService";

function App() {

  const [images, setImages] = useState([]);

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
        <button onClick={() => beginUpload()}>Upload Image</button>
        <section>
          {images.map(i => <img src={i} alt="" />)}
        </section>
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
