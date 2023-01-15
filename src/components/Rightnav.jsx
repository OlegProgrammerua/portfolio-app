import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  
  

  li{
    
    padding:10px;
    margin-left:10px
    
    
    
  }

  li a{
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    cursor:pointer;
    
  }
  

    

  @media(max-width:768px){
        
        flex-flow: column nowrap;
        background-color: #240E02;
        position:absolute;
        right:${({open}) => open? '0': '120%'};
        top:0;
        z-index: 10;
        width: 300px;
        height: 100vh;
        text-align: center;
        padding-top: 3.5rem;
        transition:right 0.3s ease-in-out;

        
        
    
}

@media(max-width:700px){
        
  flex-flow: column nowrap;
  background-color: #240E02;
  position:fixed;
  right:${({open}) => open? '0': '120%'};
  top:0;
  
  width: 250px;
  height: 100vh;
  text-align: center;
  padding-top: 3.5rem;
  transition:right 0.3s ease-in-out;

  
  

}
  @media(max-width:500px){
          
    flex-flow: column nowrap;
    background-color: #240E02;
    position:fixed;
    right:${({open}) => open? '0': '120%'};
    top:0;
    z-index: ${({open}) => open ? 1000:0};
    width: 125px;
    height: 100vh;
    text-align: center;
    padding-top: 3.5rem;
    transition:right 0.3s ease-in-out;

    li a{
      text-decoration: none;
      font-size: 12px;
      color: #fff;
      cursor:pointer;
      
    }
    

  }

  


`

const Nav_Wrapper = styled.div`
  display:${({open}) => open ? 'block':'none'};
  opacity:${({open}) => open ? 0.7:0};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:2 ;
  background-color: black;
  transition:opacity 0.3s ease-in-out;
  

`

const Rightnav = ({open}) => {
  return (
    <div>
      <Ul open={open}>
            <li><Link to='/components/About'>About</Link></li>
            <li><Link to='/components/Gallery'>Gallery</Link></li>
            <li><Link to='/components/Contact'>Contact</Link></li>
            <li><Link to='/components/Gear'>Gear</Link></li>
          </Ul>
          <Nav_Wrapper open={open}/>
    </div>      
      
  )
}

export default Rightnav