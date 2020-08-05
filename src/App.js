import React from 'react';

import './App.css';
import Header from './Header';

import images from './data.js';
import ImageList from './ImageList';








function App() {
return (
    <div className="App">
     <Header />
     <ImageList  images={images}/>
     </div>
  );
}

export default App;
