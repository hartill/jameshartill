import React, { Component } from 'react'

import './postTile.css'

import MoreIcon from 'react-icons/lib/md/more-vert'
import CloseIcon from 'react-icons/lib/md/close'

class PostTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      backVisible: false
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
    let image = this.props.post.image !== undefined ? require(`./../../static/images/${this.props.post.image}`) : null
    let iconContent = (
      this.state.backVisible ?
        <CloseIcon size='21' color='#008073' onClick={(e) => this.handleCloseIconClick(e)}/> :
        <MoreIcon size='21' color='#008073' onClick={(e) => this.handleMoreIconClick(e)}/>
    )

    let frontContent = (
      <div className='post-tile-excerpt'>
        <p>{ this.props.post.short_desc }</p>
      </div>
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
        {
          this.props.post.external_url ?
            (
              <a href={ this.props.post.external_url } target='new' className='button'>View Project</a>
            ) : (
              <a onClick={(e) => this.props.handlePostClick(this.props.post, e)} className='button'>More</a>
            )
        }
      </div>
    )

    return (
      <div className='post-item' key={this.props.post.id}>
        <div className='post-item-background'>
          <img src={image} alt="img"/>
        </div>
        <div  className={ this.state.backVisible ? 'post-item-info zero-margin' : 'post-item-info' }>
          <div className='post-tile-header'>
            <div className='post-tile-title'>
              { this.props.post.title }
            </div>
            <div className='post-tile-icon'>
              { iconContent }
            </div>
          </div>
          { this.state.backVisible ? backContent : frontContent }
        </div>
      </div>
    )
  }
}

export default PostTile
