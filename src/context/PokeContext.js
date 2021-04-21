import React, {createContext , useEffect, useState} from 'react'
import axios from 'axios'
import {objToPokeArray} from '../Helper';

export const PokeContext = createContext();

const PokeProvider = (props) =>{

    const pokeDefecto = {
        id: 0,
        name: '------',
        url: null
    }

    //estado para poke unico 
    //---------para busqueda-------------------
    const [idPoke, setidPoke] = useState('');

    //estado para almacenar 
    //-------------lista de pokes---------------------------
    const [listapokes, setlistapokes] = useState([]);

    //para el paginado
    const [pag, setpag] = useState(0);
    const [disableprev, setdisableprev] = useState(true);
    const [disablenext, setdisablenext] = useState(false);
    
    //constante para cantidad x pagina
    const cantItemsPagination = 6;

    //state para error 
    const [error, seterror] = useState(false);

    //Loader
    const [load, setload] = useState(true);


    //--------------Functions------------------------------
    const next = () =>{
        if(listapokes.length === cantItemsPagination){
            setpag(pag + cantItemsPagination);
            setdisableprev(false);
        }else{
            setdisablenext(true);
        }
    }

    const prev = () =>{
        if(pag > cantItemsPagination-1 ){
            setpag(pag - cantItemsPagination);
            setdisablenext(false);
            if(pag !== 6){
                setdisableprev(false);
            }else{
                setdisableprev(true);
            }
        }else{
            setdisableprev(true);
        }
    }

    useEffect(() => {
            setload(true);
            if(!idPoke.trim()){

                const getListPokes = async () =>{
                    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${cantItemsPagination}&offset=${pag}`;
                    const result = await axios.get(url);
                    const obj = Object.values(result.data.results)
                    setlistapokes(obj);
        
                    setTimeout(() => {
                        setload(false)
                    }, 1000);
                }
        
                getListPokes();

            }else{   
                const obtenerDataPokemon = async () =>{
                    const url = `https://pokeapi.co/api/v2/pokemon/${idPoke}/`;
                    if(listapokes.length > 1){
                        setlistapokes(objToPokeArray(pokeDefecto));
                    }  
                    
                    try {
                        const result = await axios.get(url)
                                   .catch( err => {
                                        if (err.response.status === 404) {
                                            throw new Error(`${err.config.url} no existe`);
                                        }
                                        throw err;
                                    });  
                            setlistapokes(objToPokeArray(result.data));
                                                  
                    } catch (err) {
                            console.log(err.message);
                            setidPoke('');
                            seterror(true);

                            setTimeout(() => {
                                seterror(false);
                            }, 2000);
                    }
                }
                obtenerDataPokemon();
            }
                
            setTimeout(() => {
                setload(false)
            }, 1000);
    //eslint-disable-next-line react-hooks/exhaustive-deps       
    }, [idPoke,pag])



    return (
        <PokeContext.Provider
            value={{
                listapokes,
                setidPoke,
                setpag,
                prev,
                next,
                load,
                disableprev,
                disablenext,
                error,
                seterror
            }}
        >
            {props.children}
        </PokeContext.Provider>
    )
}

export default PokeProvider;