import React, { Component } from 'react'

import './postTileWide.css'

import LinkIcon from 'react-icons/lib/md/link'
import GitLogo from'../../static/images/GitHub-Mark-32px.png';

class PostTileWide extends Component {
  constructor(props){
    super(props);
    this.state = {
      tileColor: ''
    }
  }

  componentWillMount() {
    let backgroundColors = [
      '#008073',
      //'#e74c3c',
      '#443642',
      '#126DB3'
    ]
    let backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]
    this.setState({
      tileColor: backgroundColor
    })
  }

  render() {
    let image = this.props.post.image ? require(`./../../static/images/${this.props.post.image}`) : null
    let smallImage = this.props.post.small_image ? require(`./../../static/images/${this.props.post.small_image}`) : null

    return (
      <div id={ 'post-item-' + this.props.post.id }
        className= 'post-item-wide'
        style={{
          left: this.props.tileX,
          top: this.props.tileY,
          height: this.props.height,
          backgroundColor: this.state.tileColor,
          width: this.props.width
        }}
        key={ this.props.post.id }>
        {
          image !== null ?
          (
            <div
              className='post-item-background-image-wide'
              style={{
                flexBasis: this.props.height
              }}>
              <img src={image} alt="img"/>
            </div>
          ) :  null
        }

        {
          smallImage !== null ?
          (
            <div
              className='post-item-background-image-small-wide'
              style={{
                flexBasis: this.props.height
              }}>
              <img src={smallImage} alt="img"/>
            </div>
          ) :  null
        }
        <div className='post-item-info-wide'>
          <div className='post-tile-header'>
            <div id={ 'post-tile-title-'  + this.props.post.id } className='post-tile-title'>
              { this.props.post.title }
            </div>
          </div>
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
                  <a href={ this.props.post.external_url } target='new' className='icon-button'>
                    <LinkIcon size='21' color='#008073'/>
                    </a>
                ) : null
            }
            {
              this.props.post.github_url ?
                (
                  <a href={ this.props.post.github_url } target='new' className='icon-button'>
                    <img src={ GitLogo } alt="img"/>
                  </a>
                ) : null
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostTileWide
