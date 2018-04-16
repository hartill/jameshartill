import React, { Component } from 'react';

import SinglePagePost from './views/SinglePagePost'
import Header from './components/Header'
import PostTile from './components/PostTile'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      selectedPost: undefined
    }
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleClosePost = this.handleClosePost.bind(this);
  }

  componentDidMount(){
    let dataURL = 'http://localhost:8080/jameshartill/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=20'
    //let dataURL = 'http://www.jameshartill.com/wordpress/wp-json/wp/v2/posts?_embed'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log(nextState)
  }

  handlePostClick(post, e) {
    e.preventDefault();
    this.setState({
      selectedPost: post
    });
  }

  handleClosePost(e) {
    e.preventDefault();
    this.setState({
      selectedPost: undefined
    });
  }

  render() {
    let childElements = this.state.posts.map((post, index) => {
      if (post.status === 'publish') {
        return (
          <PostTile
            post={post}
            handlePostClick={this.handlePostClick}
          />
        )
      } else {
        return null
      }
    })

    if (this.state.selectedPost !== undefined) {
      return (
        <SinglePagePost post={this.state.selectedPost} handleClosePost={this.handleClosePost}/>
      )
    } else {
      return (
        <div className="App">
          <Header />
          <div className="post-grid">
            {childElements}
          </div>
        </div>
      );
    }
  }
}

export default App;
