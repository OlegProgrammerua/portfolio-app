import React, { Component } from 'react'
import TypewriterComponent from 'typewriter-effect'

export class Intro extends Component {
  render() {
    return (
      <div className="wrapper container-fluid">
      <div className='row'>
        
        <div className='intro_column col-md-6'>
            <div className="intro_inner">
                    <div className="intro_subtext">My name is Oleh</div>
                    <div className="intro_title">
                        <TypewriterComponent onInit={(typewriter) =>{
                          for(let i=0;i<=100;i++){
                        typewriter
                        .typeString('I`m video-maker')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Hello EveryBody')
                        .pauseFor(1000)
                        .deleteAll()
                        .start()}}}/>
                    </div>
                
            </div>
            <div className="intro_img">
              <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/Intro/intro_camera.png"} alt="" />
            </div>
        </div>
        
        
      </div>
      </div>
      
    )
  }
}

export default Intro