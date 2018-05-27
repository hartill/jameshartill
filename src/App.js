import React, { Component } from 'react';

// import SinglePagePost from './views/SinglePagePost'
import Header from './components/Header'
import PostTile from './components/PostTile'
import FeatureTile from './components/FeatureTile'
import PostTileImage from './components/PostTileImage'
import PostTileWide from './components/PostTileWide'

import posts from './api/posts'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loading: true,
      windowWidth: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount(){
    /*let dataURL = 'http://localhost:8080/jameshartill/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=20'
    //let dataURL = 'http://www.jameshartill.com/wordpress/wp-json/wp/v2/posts?_embed'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res,
          loading: false,
        })
      })*/
    this.setState({
      posts: posts,
      loading: false,
    })
  }

  updateDimensions() {
    //let width = window.innerWidth
    let width = document.documentElement.clientWidth || document.body.clientWidth

    this.setState({
      windowWidth: width,
    })
  }

  componentWillMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {

    let loadingSpinner = (
      <div className='loadingSpinner'>
        <img className='loadingSVG' src ={require('./static/svg/Spin-1s-36px.svg')} alt='loading' />
      </div>
    )
    let windowWidth = this.state.windowWidth
    let numberPerRow = Math.ceil(windowWidth/400)

    let margin = 20

    let singleTileWidth = (windowWidth - ((numberPerRow - 1) * margin)) / numberPerRow
    let tileX = 0
    let tileY = 0

    let doubleTileWidth = (singleTileWidth * 2) + margin
    let countOffset = 0

    let postTiles = this.state.posts.map((post, index) => {

      let count = index + 1 + countOffset
      if (post.status === 'publish') {
        if (index > 0) {
          if ((count-1)%numberPerRow !== 0) {
            tileX += (singleTileWidth + margin)
          } else {
            tileX = 0
            tileY += (singleTileWidth + margin)
          }
        }
        if (post.type === 'feature') {
          return (
            <FeatureTile
              post={post}
              key={index}
              tileX={tileX}
              tileY={tileY}
              singleTileWidth={singleTileWidth}
            />
          )
        } else if (post.type === 'photo') {
          return (
            <PostTileImage
              post={post}
              key={index}
              tileX={tileX}
              tileY={tileY}
              singleTileWidth={singleTileWidth}
            />
          )
        } else if ((post.size === 'wide') && (count%numberPerRow !== 0)) {
          let thisX = tileX
          let thisY = tileY
          tileX += (singleTileWidth + margin)
          countOffset += 1
          return (
            <PostTileWide
              post={post}
              key={index}
              tileX={thisX}
              tileY={thisY}
              width={doubleTileWidth}
              height={singleTileWidth}
            />
          )
        } else {
          return (
            <PostTile
              post={post}
              key={index}
              tileX={tileX}
              tileY={tileY}
              singleTileWidth={singleTileWidth}
            />
          )
        }
      } else {
        return null
      }
    })

    let content = (
      <div className="post-grid">
        { postTiles }
      </div>
    )

    return (
      <div className="App">
        <Header />
        { this.state.loading ? loadingSpinner : content }
      </div>
    );
  }
}

export default App;
