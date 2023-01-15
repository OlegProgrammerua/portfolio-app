import React from 'react'
import ReactPlayer from 'react-player'
import { FaThumbsUp, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function FullItem(props) {
  return (
    <div className='Full_Item'>
        <div className="wrapper container-fluid">
        <div className="item_title text-center">{props.item.title}</div>
            <div className="video_player">
                <ReactPlayer  controls url={props.item.url}/>
                <div className="video_info">
                  <div className="desc_video">
                    <b>Description to video</b>
                    <p>
                      {props.item.desc}
                    </p>
                    </div>
                    <div className="item_stats">
                    <div className="item_stats">
                      <FaThumbsUp/> {props.item.likes}
                    </div>
                    <div className="item_stats">
                      <FaEye/> {props.item.views}
                    </div>
                    
                    </div>  
                  </div>
            </div>
            <div className='see_video text-center'>
              <Link onClick={()=> props.delete()} to='/components/Gallery'>Show more video</Link></div>
        </div>

    </div>
  )
}
