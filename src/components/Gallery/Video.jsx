
import { FaThumbsUp, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import React, { Component } from 'react'

export class Video extends Component {
  render() {
    return (
        <div className='video_item' >
        <div className="video_title" >{this.props.item.title}</div>
        <Link to='/components/FullItem' className="video_preview" onClick={()=>this.props.onShow(this.props.item)} >
            <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/Gallery/"+this.props.item.preview}   />
        </Link>
        <div className="video_stats">
            <div className="video_likes">
                <FaThumbsUp/> {this.props.item.likes}
                
            </div>
            <div className="video_views">
                <FaEye/> {this.props.item.views}
            </div>
        </div>
    </div>
    )
  }
}

export default Video
