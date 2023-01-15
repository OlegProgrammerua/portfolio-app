import React from 'react'
import Video from './Video'

export default function Videos(props) {
  return (
    <div className="gallery_row">
        {props.videos.map(video =>
            <Video key ={video.id} item ={video} onShow = {props.onshow}/>
            )}
    </div>
  )
}
