import React from 'react'

export default function GearItem(props) {
  return (
    <div className='Gear_Item'>
        <div className="gear_img">
            <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/Gear/"+props.item.img} alt="" />
        </div>
        <div className="gear_info">
            <div className="gear_type">{props.item.type}</div>
            <div className="gear_name">{props.item.name}</div>
        </div>
        
        
    </div>
  )
}
