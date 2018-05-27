import React, { Component } from 'react'

import './featureTile.css'

class FeatureTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      tileWidth: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    const width = document.getElementById('post-item').clientWidth
    this.setState({
      tileWidth: width
    })
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div id='post-item'
        className='post-item feature-tile'
        style={{ height: this.state.tileWidth }}
        key={ 8738937 }>
        <span>Hello, I am a designer and developer.</span>
        <span>Here are some projects and experiments.</span>
      </div>
    )
  }
}

export default FeatureTile
