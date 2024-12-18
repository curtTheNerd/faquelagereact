import React from 'react';
import './media.css';
import YouTube from 'react-youtube';
import { WiDayThunderstorm } from 'react-icons/wi';

const Media = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
    }
  }
  
  return (
    <section className='video container'>
      <h2>Featured Video</h2>
      <YouTube videoId="OXdOKobg5sA" className='ytVideo' opts={opts} />
      <h2></h2>
      <YouTube videoId="RQfjA1pA_FA" opts={opts} className='ytVideo' />
      <h2></h2>
      <YouTube videoId="TfyPngj8kUc" opts={opts} className='ytVideo' />
      <h2>More Content Coming Soon...</h2>

    </section>
  )
}

export default Media
