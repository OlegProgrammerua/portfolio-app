import React from 'react'
import { useSelector } from 'react-redux'
import GearItem from './GearItem'


export default function Gear() {
    const gearArray = useSelector(state => state.gear.value)
  return (
    <div id='GEAR' className='Gear_block'>
        <div className="conatainer-fluid">
            <h2 className='text-center'>My Gear</h2>
            
            <div className="gear_row">
                {gearArray.map(el => 
                    <GearItem key = {el.id} item={el}/>
                    )}
            </div>
        </div>
      </div>
  )
}
