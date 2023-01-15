import React, {useState} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import styled from 'styled-components'
import Rightnav from './Rightnav';

 
const StyleBurger = styled.div`
opacity:0;
width: 2rem;
height: 2rem;
position: absolute;
display: flex;
justify-content: space-around;
right: 20px;
flex-flow: column nowrap;
border-radius: 10px;


  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open? '#ccc': '#fff'};
    transform-origin:1px;
    transition: transform 500ms ease;
    

    &:nth-child(1){
      transform: ${({open}) => open? 'rotate(45deg)': 'rotate(0)'}
    }

    &:nth-child(2){
      transform: ${({open}) => open? 'translateX(100)': 'translateX(0)'};
      opacity:${({open}) => open? 0: 1}
    }

    &:nth-child(3){
      transform: ${({open}) => open? 'rotate(-45deg)': 'rotate(0)'}
    }
  }

  @media(max-width:768px){
    opacity:1;
    z-index:9999999;
        
    }
}

  
`;
  

const Burger = () => {
    const [open, setOpen] =useState(false)
  return (
    <>
      <StyleBurger open = {open} onClick={() => setOpen(!open)}>
          <div />
          <div/>
          <div/>
      </StyleBurger>
    <Rightnav open={open}/>
    </>
  )
}

export default Burger