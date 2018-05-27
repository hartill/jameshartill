import React, { Component } from 'react'

import './featureTile.css'

class FeatureTile extends Component {
  render() {
    return (
      <div id='post-item'
        className='post-item feature-tile'
        style={{
          left: this.props.tileX,
          top: this.props.tileY,
          height: this.props.singleTileWidth,
          width: this.props.singleTileWidth
        }}
        key={ 8738937 }>
        <span>{ this.props.post.text }</span>
      </div>
    )
  }
}

export default FeatureTile
