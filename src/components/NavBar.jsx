import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Rightnav from './Rightnav'

const NAV = styled.div`
  height: 65px;
  float: right;
  padding: 0 20px;
  display: flex;
  align-items: center;
`


const NavBar = () => {
  return (
    <NAV>
        <Burger/>
       
    </NAV>
  )
}

export default NavBar