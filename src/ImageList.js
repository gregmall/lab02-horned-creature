import React, { Component } from 'react'
import ImageItem from  './ImageItem'
import './App.css';
// const keywords = [
//     'narwhal',
//     'rhino',
//     'unicorn',
//     'unicorn',
//     'markhor',
//     'addax',
//     'mouflon',
//     'chameleon',
//     'lizard',
//     'dragon'

//    ];

export default class ImageList extends Component {


    handleDropdown = (e) =>{

        const keyword = e.target.value;
        this.setState({keyword})
    }
    render() {
        const arrayImages = this.props.images;
   
      
        return (

            
            
            <div className="images">CHOOSE!
           
                
                {arrayImages.map((image) =>{
                    return <ImageItem key={this.props.title} image={image}/>
                })}
            </div>
        )
    }
}
