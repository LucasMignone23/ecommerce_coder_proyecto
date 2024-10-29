import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="contacto">
            <div className="logo">
                <img className="logo" src="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725807373/Phina_crudo_sin_fondo_db5zyn.png" alt="Logo Phina"/>
            </div>
            <div className="redes"><InstagramIcon/><a href="https://www.instagram.com/phinashowroom_/?igsh=NDN1eHgzbDF1cmg1" target='_blank'>Phina Showroom</a></div>
            <div className="ubicacion"> Luján, BsAs. Argentina</div>
        </div>
        <div className="desarrollo">
        <p>©2024 Desarrollado por Lucas Mignone.</p> 
        </div>
        
    </div>
    
  )
}
