import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <img alt={this.props.image.url} src={this.props.image.url.includes('modernfarmer') ? 'https://www.placecage.com/c/200/300/' : this.props.image.url} />
            </div>
        )
    }
}




