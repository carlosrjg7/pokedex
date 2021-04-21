import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Pagination = () => {

    const {prev,next,disableprev,disablenext,load} = useContext(PokeContext);

    return (
        <div className="flex justify-center items-center w-full p-4 mx-auto my-12">
            <button 
                type="button"
                className="btn btn-black mx-2 disabled:opacity-50"
                onClick={prev}
                disabled={disableprev || load }
            >Anterior</button>

            <button 
                type="button"
                className="btn btn-black mx-2 disabled:opacity-50 flex"
                onClick={next}
                disabled={ disablenext || load }
            > 
                Siguiente
            </button>
        </div>
    )
}

export default Pagination
