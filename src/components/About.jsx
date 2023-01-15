import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div id='ABOUT' className='About_block container-fluid '>
        <div className="wrapper">
          <h2 className='about_title text-center'>About me</h2>
          <div className="about_row row">
            <div className="col-md-4">
              <div className="about_photo">
                <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/About/About_image.png"} className='img-responsive' alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <p className='about_descriptive'>
              Hello my name is Oleh and I`m video-maker. I have making video for 2 years. I like this process. Two years ago, I began game video making. Later I had study to record video using my camera. Also, I like add visual and sound effects on my videos. On this you can see my videos works which I had making for 2 years. Also, in the future I will adding a new video on my portfolio site
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About