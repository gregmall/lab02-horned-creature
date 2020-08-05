import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <img alt="horned creature" key={this.props.image.title} src={this.props.image.url}/>
            </div>
        )
    }
}
