import React from 'react'
import {Link} from 'react-router-dom'
import  Wallpaper from '../images/wallpaper.jpg'

export const Home = () => {
  return (
    <div className='main-page' style={{backgroundImage:` url(${Wallpaper})`}}>
      <div className='home-title'> <h1>GOOD FOOD <br/> TO YOUR DOOR</h1>
      <h6>Enjoy Burgers<br/> At Home!!</h6></div>
        <div className='order'>
            <Link to="/menu"><button>Sipariş Ver</button></Link>
        </div>
    </div>
  )
}
