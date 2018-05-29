import React, { Component } from 'react'

import './postTileImage.css'

class PostTileImage extends Component {
  render() {
    let image = this.props.post.image ? require(`./../../static/images/${this.props.post.image}`) : null
    return (
      <div id={ 'post-item-' + this.props.post.id }
        className='post-item'
        style={{
          left: this.props.tileX,
          top: this.props.tileY,
          height: this.props.singleTileWidth,
          backgroundColor: '#ffffff',
          width: this.props.singleTileWidth
        }}
        key={ this.props.post.id }>
        {
          image !== null ?
          (
            <div className='post-item-background-image'>
              <img src={image} alt="img"/>
            </div>
          ) :  null
        }
      </div>
    )
  }
}

export default PostTileImage
