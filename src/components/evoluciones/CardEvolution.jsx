import React from 'react'
import {fill, imgSrc} from '../../Helper'
import Loader from '../loader/Loader'
import pokeball from '../../assets/img/pokeball.png';

const CardEvolution = ({id,name,load}) => {

    
    const idex = fill(id);
    let ImgSrcResult = imgSrc(id,idex,pokeball);

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 sm:max-w-xs md:max-w-sm p-3">
            <div className="card rounded-lg bg-white">
                <div className="imagen w-full max-w-xs sm:max-w-xs mx-auto my-5 p-8 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden"> 
                   <Loader load={load}/>
                   <img className="" src={ImgSrcResult} alt="Poke" />
                </div>
                <div className="px-6 pb-4">
                    <div className={` ${ load ? 'animate-pulse' : '' } font-bold text-xl mb-2 font-mont text-gray-900 text-center capitalize`}>{name} #{idex}</div>
                </div>
            </div>
        </div>
    )
}

export default CardEvolution
