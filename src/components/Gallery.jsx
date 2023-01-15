import React from 'react';
import { useSelector } from 'react-redux';
import Videos from './Gallery/Videos';



export default function Gallery(props) {
  const videosArray = useSelector(state => state.video.value)
  return (
    <div id='GALLERY' className='Gallery'>
        <div className="wrapper container-fluid">
            <h2 className='text-center'>My Video Gallery</h2>
            <div >
                
                  <Videos onshow ={props.onshow} videos={videosArray} />
                  
            </div>
        </div>
      </div>
  )
}
