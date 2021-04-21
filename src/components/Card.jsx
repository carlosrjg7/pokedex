import React, { useContext } from 'react'
import {fill, getId, imgSrc} from '../Helper'
import Loader from './loader/Loader'
import pokeball from '../assets/img/pokeball.png';
import { ModalContext } from '../context/ModalContext';

const Card = ({data, load}) => {

     //jalamos el context
     const { setOpen, setIdPoke} = useContext(ModalContext);

    //para hacer el componente reutilizable debo volarme esto de aca 
    const realId = getId(data.url);
    const idex = fill(realId);
    let ImgSrcResult = imgSrc(realId,idex,pokeball);

    const openModal = () =>{
        setIdPoke(realId);
        setOpen(true);
    }
            
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 sm:max-w-xs md:max-w-sm p-3">
            <div className="card rounded-lg bg-white">
                <div className="imagen w-full max-w-xs sm:max-w-xs mx-auto my-5 p-8 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden"> 
                   <Loader load={load}/>
                   <img className="" src={ImgSrcResult} alt="Poke" />
                </div>
                <div className="px-6 pb-4">
                    <div className={` ${ load ? 'animate-pulse' : '' } font-bold text-xl mb-2 font-mont text-gray-900 text-center capitalize`}>{data.name} #{idex}</div>
                </div>
                <div className="w-full border-t border-gray-100">
                    <button type="button" className="w-full bg-red-500 active:bg-gray-500 text-white font-bold p-4 ring-opacity-0 focus:ring-0 focus:outline-none font-mont"
                    onClick={openModal}
                    >VER MÁS</button>
                </div>
            </div>
        </div>
    )
}

export default Card
