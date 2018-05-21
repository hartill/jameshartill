import React, { Component } from 'react'

import CloseIcon from 'react-icons/lib/md/close';
import InfoIcon from 'react-icons/lib/md/info';

import './singlePostPage.css'

class SinglePagePost extends Component {
  render() {
    return (
      <div className='post-page'>
        <div className='post-header'>
          <CloseIcon size='32' onClick={this.props.handleClosePost}/>
          <span>{this.props.post.title.rendered}</span>
          <InfoIcon size='32'/>
        </div>
        <div className='post-content' dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}>
        </div>
      </div>
    );
  }
}

export default SinglePagePost
