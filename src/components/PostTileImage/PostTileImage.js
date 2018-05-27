import React, { Component } from 'react'

import './postTileImage.css'

class PostTileImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      tileWidth: 0,
      titleHeight: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    let width = document.getElementById('post-item-' + this.props.post.id ).clientWidth

    let titleHeight = document.getElementById('post-tile-title-'  + this.props.post.id) !=null ?
      document.getElementById( 'post-tile-title-'  + this.props.post.id ).clientHeight :
      0

    this.setState({
      tileWidth: width,
      titleHeight: titleHeight
    })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

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
