import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className = 'Home'>
             <div className='constante'>
                <h1>La constante de Proponer</h1>
            </div>
            <div className='plastica-p'>
               <p>Miembro Activo del Salón de la Plástica Mexicana</p>
            </div>
            <div className='plastica'>
               <img  src={process.env.PUBLIC_URL + '/salonPlasticaMexicana-9fdd5cff.png'}  width='110px' height='80px'></img>
            </div>
      <div className='logo-chido'>
            <img src={process.env.PUBLIC_URL + '/logotipo.png'} width='230px' height='145px'></img>
      </div>
        <div className='Carrousel'>
           <img src={process.env.PUBLIC_URL + '/HOMEDOS.jpg'} width='100%' height='100%'  /> 
        </div>
        <div className='img'>
           <img className='contorno' src={process.env.PUBLIC_URL + '/derecha.jpg'} width='373px' height='320px'></img>
        </div>
        <div className='img-2'>
           <img className='contorno' src={process.env.PUBLIC_URL + '/izquierda.jpg'} width='373px' height='320px'></img>           
        </div>
         {/* <img src='logotipo.png' width='230px' height='145px'></img> */}

        {/* <div  className='img-3'>
           <img className='contorno' src='centro.jpg' width='353px' height='300px'></img>          
        </div>
        <div className='img-4'>
           <img className='contorno' src='derecha.jpg' width='353px' height='300px'></img>
        </div> */}
    </div>
  );
}
