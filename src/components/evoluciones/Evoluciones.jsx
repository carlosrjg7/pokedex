import React, { Fragment, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
import useChainList from '../../hooks/useChainList';
import { Link } from 'react-router-dom';

const Evoluciones = (props) => {

    const {id} = useParams();

    const [List, setChain ] = useChainList();
    
    useEffect(() => {
        if(id > 0){
            const getSpecie = async () => {
                const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
                const specie = await axios.get(url);
                const chainUrl = specie.data.evolution_chain.url;

                const chain = await axios.get(chainUrl);
                setChain(chain.data.chain)
            }

            getSpecie();
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <Fragment>
            <div className="lista my-12 md:container xl:max-w-7xl mx-auto flex flex-wrap justify-evenly relative">
                <List />
            </div>
            <div className="w-full flex justify-center items-center">
                <Link 
                    to="/" 
                    className="px-3 py-1 btn btn-black btn-black:hover"
                >Volver</Link>
            </div>
        </Fragment>
    )
}

export default Evoluciones
