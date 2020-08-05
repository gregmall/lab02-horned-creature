import React, { Component } from 'react'
import ImageItem from  './ImageItem'
import './App.css';
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

export default class ImageList extends Component {
state = {
    keyword: null
};
// handleKeyword = (e) => {
//     const keyword = e.target.value
//     this.setState({keyword})
// }

    handleDropdown = (e) =>{

        const keyword = e.target.value;
        this.setState({keyword})
    }
    render() {
        const arrayImages = this.props.images;
        const filterImages = arrayImages.filter(image => image.keyword === this.state.keyword)
       console.log(arrayImages.keyword)
        return (

            
            <div className="images">CHOOSE!
                <select onChange={this.handleDropdown}>
                    {
                        keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
                    }
             
                </select>
                
                {arrayImages.map((image) =>{
                    return <ImageItem key={this.props.title} image={image}/>
                })}
            </div>
        )
    }
}
