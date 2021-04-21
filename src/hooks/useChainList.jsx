import React, { Fragment, useEffect, useState } from 'react'
import CardEvolution from '../components/evoluciones/CardEvolution'
import {getIdFromSpecie} from '../Helper'

const useChainList = () => {
    
    const [chain, setChain] = useState({});
    const [load, setload] = useState(true);
    const [data, setdata] = useState([])
    

    useEffect(() => {
        setload(true);
        let TempChain = chain;
        let pokes = [];

        const extracToChain = () =>{
            if(Object.keys(TempChain).length > 0 ){
                                 
                pokes.push({
                    name: TempChain.species.name,
                    id: getIdFromSpecie(TempChain.species.url)
                })

                if(TempChain.evolves_to.length > 0){
                    TempChain = TempChain.evolves_to[0];
                    extracToChain();
                }

                setTimeout(() => {
                    setload(false);
                }, 1000);

            }
        }

        extracToChain();
        setdata(pokes);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chain])
    
    const List = () => (
        <Fragment>
            {
                data.length > 0 ?
                    data.map((poke,index) => (
                         <CardEvolution key={index} name={poke.name} id={poke.id} load={load}/>
                    )) 
                    : 'Cargando...'

            }
        </Fragment>
    )

    return [List,setChain];

}

export default useChainList
