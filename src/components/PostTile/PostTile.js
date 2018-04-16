import React, { Component } from 'react'

import './postTile.css'

import MoreIcon from 'react-icons/lib/md/more-vert';

class PostTile extends Component {
  render() {
    let imageSRC = this.props.post._embedded['wp:featuredmedia'][0].source_url
    console.log(this.props.post)
    return (
      <div className='post-item' key={this.props.post.id} onClick={(e) => this.props.handlePostClick(this.props.post, e)}>
          <div className='post-item-background'>
            <img src={imageSRC} alt="img"/>
          </div>
          <div className='post-item-info'>
            <div className='post-tile-header'>
              <div className='post-tile-title'>
                {this.props.post.title.rendered}
              </div>
              <div className='post-tile-icon'>
                <MoreIcon size='21' color='#008073' onClick={null}/>
              </div>
            </div>
            <div className='post-tile-excerpt' dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}}>
            </div>
          </div>
      </div>
    )
  }
}

export default PostTile
