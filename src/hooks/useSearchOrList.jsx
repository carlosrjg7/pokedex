import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Error from '../components/Error';

const useSearchOrList = () => {

    const {listapokes,load,error,seterror} = useContext(PokeContext);

    const Listado = () => (
        <>  
            {
                error && <Error seterror={seterror}/>
            }

            {
               listapokes.length > 0 &&
               listapokes.map( (poke,index) => (
                   <Card key={index} data={poke} load={load}/>
               ))
            }

            {   
                listapokes.length > 1 &&
                <Pagination />
            }
                          
        </>
    );

    return [Listado];
}

export default useSearchOrList
