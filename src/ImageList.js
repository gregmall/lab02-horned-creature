import React, { Component } from 'react'
import ImageItem from  './ImageItem'
import './App.css';
export default class ImageList extends Component {

    handleDropdown = (e) =>{

        const horns = e.target.value;
        this.setState({horns})
    }
    render() {
        const arrayImages = this.props.images;
        const filterImages = images.filter(image => image.horns === this.state.filter)
        return (

            
            <div className="images">
                <select onChange={this.handleDropdown}>
                    <option value="one">one horn</option>
                    <option value="two">two horns</option>
                    <option value="three">three horns</option>
                    <option value="hundred">one hundred horns</option>
                </select>
                {arrayImages.map((image) =>{
                    return <ImageItem key={this.props.title} image={image}/>
                })}
            </div>
        )
    }
}
