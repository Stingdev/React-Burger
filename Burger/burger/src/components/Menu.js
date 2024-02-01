import React from 'react'
import {Data} from './Data'
import MenuItem from './MenuItem'

export const Menu = () => {
  return (
    <div className='menu-page'>
      <h1 className='menu-title'>Burgerlerimiz</h1>
      <div className='menu-list'>
        {Data.map((menuItem,key)=>{
           return(
            <MenuItem
            key={key}
            image ={menuItem.image}
            name = {menuItem.name}
            content ={menuItem.content}
            price ={menuItem.price}
            />
           );
        })} 

      </div>
    </div>
  )
}
