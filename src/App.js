import React from 'react';
import Header from './components/Header';
import UploadBtn from './components/UploadBtn';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadBtn />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
