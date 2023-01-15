import Footer from "./components/Footer";
import Header from "./components/Header";

import Intro from "./components/Intro";
import Awards from "./components/Awards";
import React, { Component} from 'react'
import About from "./components/About";
import Gallery from "./components/Gallery";
import Gear from "./components/Gear";
import Contact from "./components/Contact";
import FullItem from "./components/FullItem";
import { Route, Routes } from "react-router-dom";

export class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      awards:[
        {
          id:1,
          title:'Works',
          number:'+100'
        },
        {
          id:1,
          title:'Reward',
          number:'+30'
        },
        {
          id:1,
          title:'Followers',
          number:'+1000'
        },
        {
          id:1,
          title:'Works',
          number:'+100'
        },
        {
          id:1,
          title:'Categories',
          number:'+10'
        }
      ],
      showItem:false,
      fullItem:{}

      
    }

    this.showFullItem = this.showFullItem.bind(this)
    this.deleteFullItem = this.showFullItem.bind(this)
  }
  render() {
    
    return (
      <div>
      <Header/>
      <main>  
        <Routes>
          <Route path="/" element={<Intro/>}/>     
          <Route path="/" element={<Awards awards = {this.state.awards}/>}/>     
          <Route path="/components/About" element={ <About/>}/>
          <Route path="/components/Gallery" element={ <Gallery onshow = {this.showFullItem}/>}/>
          <Route path="/components/FullItem" element={this.state.showItem && <FullItem item = {this.state.fullItem} delete={this.deleteFullItem}/>}/>
          <Route path="/components/Gear" element={ <Gear/>}/>
          <Route path="/components/Contact" element={ <Contact/> }/>
        </Routes>
        {/* <About/>
        <Gallery onshow = {this.showFullItem}/>
        {this.state.showItem && <FullItem item = {this.state.fullItem}/>}
        <Gear/>
        <Contact/> */}
      </main>
      <Footer/>
      </div>
      
        
      
    
   
    )
  }
  showFullItem(item){
    this.setState({
      fullItem:item
    })

    this.setState({
      showItem:!this.state.showItem
    })
  }

  deleteFullItem(){
    this.setState({
      fullItem:{}
    })

    this.setState({
      showItem:false
    })
  }
}





export default App