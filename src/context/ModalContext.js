import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [open, setOpen] = useState(false);
    const [idPoke, setIdPoke] = useState('');
    const [load, setload] = useState(true);
    //Aqui va a estar toda la data que viene del api para mostrar en el modal
    const [dataPoke, setDataPoke] = useState({
        id: 1,
        name: '',
        weight: '',
        height: '',
        abilities: [],
        types: []
    });

    useEffect(() => {
        setload(true);
        const getData = async () =>{
            const url = `https://pokeapi.co/api/v2/pokemon/${idPoke ? idPoke : 1}/`;
            const result = await axios.get(url);
            setDataPoke(result.data);

            setTimeout(() => {
                setload(false)
            }, 1000);
        }

        getData();

    }, [idPoke])

    return (
        <ModalContext.Provider
            value={{
                dataPoke,
                setIdPoke,
                open,
                setOpen,
                load
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
