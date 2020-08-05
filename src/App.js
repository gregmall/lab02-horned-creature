import React from 'react';

import './App.css';
import Header from './Header';

import images from './data.js';
import ImageList from './ImageList';

const keywords = [
  'narwhal',
  'rhino',
  'unicorn',
  'unicorn',
  'markhor',
  'addax',
  'mouflon',
  'chameleon',
  'lizard',
  'dragon'

 ];






class App extends React.Component {
  state = {
    keyword: null
  }


handleDropdown = (e) =>{

    const keyword = e.target.value;
    this.setState({keyword})
}

render() {

const filterImages = images.filter(image => image.keyword=== this.state.keyword);











  return (

  
    <div className="App">
     <Header />
     <select onChange={this.handleDropdown}>
                    {
                        keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
                    }
             
                </select>
             

     <ImageList  images={filterImages}/> 
     </div>
  );
}

}









export default App;
