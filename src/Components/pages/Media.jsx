import React from 'react';
import YouTube from 'react-youtube';
import { WiDayThunderstorm } from 'react-icons/wi';

const Media = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
    }
  }
  
  return (
    <section className='media container'>
      <h2 className='mediaTitle'>Featured Video</h2>
      <YouTube videoId="OXdOKobg5sA" className='ytVideo' opts={opts} />
      <h2 className='mediaTitle'></h2>
      <YouTube videoId="RQfjA1pA_FA" opts={opts} className='ytVideo' />
      <h2 className='mediaTitle'></h2>
      <YouTube videoId="TfyPngj8kUc" opts={opts} className='ytVideo' />
      <h2 className='mediaTitle'>More Content Coming Soon...</h2>

    </section>
  )
}

export default Media
