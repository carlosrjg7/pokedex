import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';
import pokeball from '../assets/img/pokeball.png';
import {fill, imgSrc} from '../Helper'
import Loader from './loader/Loader';
import { Link } from 'react-router-dom';

const Modal = () => {

    const { open, setOpen, dataPoke, load } = useContext(ModalContext);

    const toggleModal = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    const { id, name, weight, height, abilities, types } = dataPoke;

    const idex = fill(id);

    let ImgSrcResult = imgSrc(id,idex,pokeball);

    const helloEvo = () => {
        setOpen(!open);
    }

    return (
            <div id="modalPoke" className={`${ open ? 'flex' : 'hidden'} modal_bg`}>
                <div className="modal_container">
                    <div className="modalHeader">
                        <div></div>
                        <h4 className="modalTitle">Detalles del Pokemon</h4>
                        <svg className="modalClose" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                           onClick={toggleModal}
                           ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>

                    <div className="modalBody">
                        <div className="w-6/12 p-6 rounded-md bg-gray-300 flex justify-center items-center relative overflow-hidden">
                            <Loader load={load}/>
                            <img className="w-full" src={ImgSrcResult} alt="poke"/>
                        </div>
                        <div className="description w-6/12 pl-4">
                            <ul className="flex flex-col justify-between h-full">
                                <li><span>ID:</span>  {id}</li>
                                <li><span>Nombre:</span>{name}</li>
                                <li><span>Altura:</span>{height}</li>
                                <li><span>Peso:</span>{weight} kg</li>
                                <li><span>Habilidades:</span> 
                                    <ul className="list-disc ml-5">
                                        {  
                                            abilities.length > 0 &&
                                            abilities.map((habilidad, index) => (
                                                <li key={index}>{habilidad.ability.name}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li><span>Tipo:</span>
                                    <ul className="list-disc ml-5 flex justify-evenly">
                                        {
                                            types.length > 0 &&
                                            types.map((tipo,index) => (
                                                <li key={index}>{tipo.type.name}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="modalFooter">
                        <Link to={`/detalle/${id}`} className="px-3 py-1 btn btn-black btn-black:hover" onClick={helloEvo}>
                            Ver Evoluciones
                        </Link>
                    </div>
                
                </div>
            </div>
    )
}

export default Modal
