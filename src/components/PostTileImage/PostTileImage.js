import React, { Component } from 'react'

import './postTileImage.css'

//import MoreIcon from 'react-icons/lib/md/more-vert'
//import CloseIcon from 'react-icons/lib/md/close'

class PostTileImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      backVisible: false,
    }
    this.handleMoreIconClick = this.handleMoreIconClick.bind(this)
    this.handleCloseIconClick = this.handleCloseIconClick.bind(this)
  }

  handleMoreIconClick(e) {
    e.preventDefault()
    this.setState({
      backVisible: true
    })
  }

  handleCloseIconClick(e) {
    e.preventDefault()
    this.setState({
      backVisible: false
    })
  }

  render() {

    let image = this.props.post.image ? require(`./../../static/images/${this.props.post.image}`) : null

    /*let iconContent = (
      this.state.backVisible ?
        <CloseIcon size='21' color='#ffffff' onClick={(e) => this.handleCloseIconClick(e)}/> :
        <MoreIcon size='21' color='#ffffff' onClick={(e) => this.handleMoreIconClick(e)}/>
    )

    let backContent = (
      <div className='post-tile-back'>
        <div className='post-tile-back-info'>
          {
            this.props.post.long_desc ?
              (
                <div className={'post-tile-excerpt'}>
                  <ul>
                    {
                      this.props.post.long_desc.map((line, index) => {
                      return (<li key={index}>{ line }</li>)
                      })
                    }
                  </ul>
                </div>
              ) : null
          }
        </div>
      </div>
    )*/

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
