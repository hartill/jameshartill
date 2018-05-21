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
    let imageSRC = this.props.post._embedded['wp:featuredmedia'][0].source_url
    let iconContent = (
      this.state.backVisible ?
        <CloseIcon size='21' color='#008073' onClick={(e) => this.handleCloseIconClick(e)}/> :
        <MoreIcon size='21' color='#008073' onClick={(e) => this.handleMoreIconClick(e)}/>
    )

    let frontContent = (
      <div className={'post-tile-excerpt'}
        dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}}>
      </div>
    )

    let backContent = (
      <div className='post-tile-back'>
        <div className='post-tile-back-info'>
          {
            this.props.post.key_points ?
              (
                <div className={'post-tile-excerpt'}
                    dangerouslySetInnerHTML={{__html: this.props.post.key_points}}>
                </div>
              ) : null
          }
        </div>
        {
          this.props.post.external_url ?
            (
              <a href={ this.props.post.external_url } target='new' className='button'>View</a>
            ) : (
              <a onClick={(e) => this.props.handlePostClick(this.props.post, e)} className='button'>More</a>
            )
        }
      </div>
    )

    return (
      <div className='post-item' key={ this.props.post.id } /*onClick={(e) => this.props.handlePostClick(this.props.post, e)}*/>
        <div className='post-item-background'>
          <img src={imageSRC} alt="img"/>
        </div>
        <div className={ this.state.backVisible ? 'post-item-info zero-margin' : 'post-item-info' }>
          <div className='post-tile-header'>
            <div className='post-tile-title'>
              { this.props.post.title.rendered }
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
