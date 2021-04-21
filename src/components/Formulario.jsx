import React, { useState, useContext } from 'react'
import logo from '../assets/img/pokelogo.png';
import { PokeContext } from '../context/PokeContext'

const Formulario = () => {
    
    const [id, setid] = useState('');

    //jalamos el context
    const {setidPoke} = useContext(PokeContext);

    const getText = e =>{
        const idp = e.target.value.toLowerCase();
        setid(idp);
    }

    const sendQuery = e =>{
        e.preventDefault();
        setidPoke(id);
    }

    const resetear = e =>{
        e.preventDefault();
        setid('');
        setidPoke('');
        //setpag(0);
    }

    return (
        <form className="formulario" 
            onSubmit={sendQuery}
        >
            <img src={logo} className="logo" alt="pokelogo" />
            <div className="content-input">
                <input name="id" type="text" placeholder="Nombre o id de pokemon" className="inputPoke" 
                    onChange={getText}
                    value={id}
                />
                <button type="submit" className="btn btn-black btn-black:hover w-full sm:w-28">
                    Buscar
                </button>
                <button type="button" className="btn btn-red btn-red:hover ml-0 mt-2 md:mt-0 md:ml-2 w-full sm:w-28"
                    onClick={resetear}
                >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default Formulario;
