import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <InstagramIcon/>
            <FacebookIcon/>
            <XIcon/>
        </div>
        <p>Tüm Hakları Saklıdır <span>| Giant Burger</span></p>
    </div>
  )
}
