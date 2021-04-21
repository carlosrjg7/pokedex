import React from 'react'
import useSearchOrList from '../hooks/useSearchOrList'

const Lista = () => {

    const [Listado] = useSearchOrList();

    return (
        <div className="lista my-12 md:container xl:max-w-7xl mx-auto flex flex-wrap justify-evenly relative">
              <Listado />       
        </div>
    )
}

export default Lista
