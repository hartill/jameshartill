import React, { Component } from 'react'

import './postTile.css'

import MoreIcon from 'react-icons/lib/md/more-vert'
import CloseIcon from 'react-icons/lib/md/close'
import LinkIcon from 'react-icons/lib/md/link'

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
    let image = this.props.post.image ? require(`./../../static/images/${this.props.post.image}`) : null
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
        <div className='post-tile-actions'>
        {
          this.props.post.external_url ?
            (
              <a href={ this.props.post.external_url } target='new' className='icon-button'> <LinkIcon size='21' color='#008073'/> </a>
            ) : null
        }
        </div>
      </div>
    )

    return (
      <div className='post-item' key={this.props.post.id}>
        <div className={image === null ? 'post-item-background-color' : 'post-item-background-image'}>
          { image !== null ? <img src={image} alt="img"/> : null}
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
