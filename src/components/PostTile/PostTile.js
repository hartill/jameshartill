import React, { Component } from 'react'

import './postTile.css'

import MoreIcon from 'react-icons/lib/md/more-vert'
import CloseIcon from 'react-icons/lib/md/close'
import LinkIcon from 'react-icons/lib/md/link'
import GitLogo from'../../static/images/GitHub-Mark-32px.png';

class PostTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      backVisible: false,
      tileWidth: 0,
      titleHeight: 0,
      tileColor: ''
    }
    this.handleMoreIconClick = this.handleMoreIconClick.bind(this)
    this.handleCloseIconClick = this.handleCloseIconClick.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    const width = document.getElementById('post-item-' + this.props.post.id ).clientWidth
    const titleHeight = document.getElementById( 'post-tile-title-'  + this.props.post.id ).clientHeight

    this.setState({
      tileWidth: width,
      titleHeight: titleHeight
    })
  }

  componentWillMount() {
    let backgroundColors = ['#008073', '#e74c3c', '#126DB3']
    let backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]
    this.setState({
      tileColor: backgroundColor
    })
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
    )

    return (
      <div id={ 'post-item-' + this.props.post.id }
        className='post-item'
        style={{ height: this.state.tileWidth, backgroundColor: this.state.tileColor }}
        key={ this.props.post.id }>
        <div className={image === null ? '' : 'post-item-background-image'}>
          { image !== null ? <img src={image} alt="img"/> : null}
        </div>
        <div
          className='post-item-info'
          style={
            this.state.backVisible ?
              { height: this.state.tileWidth }:
              this.state.titleHeight > 30 ?
                { height: 62 } :
              { height: 50 } }>
          <div className='post-tile-header'>
            <div id={ 'post-tile-title-'  + this.props.post.id } className='post-tile-title'>
              { this.props.post.title }
            </div>
            <div className='post-tile-icon'>
              { iconContent }
            </div>
          </div>
          { this.state.backVisible ? backContent : null }
        </div>
      </div>
    )
  }
}

export default PostTile
