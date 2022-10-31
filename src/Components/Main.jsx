import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import InformacionPokemon from "./InformacionPokemon";
import axios from "axios";

const Main = () => {
    const [datosPokemon, setDatosPokemon] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4")
    const [siguienteUrl, setSiguienteUrl] = useState();
    const [urlAnterior, setUrlAnterior] = useState();
    const [tarjetaPokemon, setTarjetaPokemon] = useState();

    const cargarPokemons = async (limite=4,offset=0) => {
        try {
            setCargando(true)
            const respuesta = await axios.get(url);
            setSiguienteUrl(respuesta.data.next);
            setUrlAnterior(respuesta.data.previous);
            getPokemon(respuesta.data.results)
            setCargando(false)
        } catch (error) { }
    }

    const getPokemon = async (respuesta) => {
        try {
            respuesta.map(async (item) => {
                const resultado = await axios.get(item.url)
                setDatosPokemon(state => {
                    state = [...state, resultado.data]
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return state;
                })
            })
        } catch (error) { }
    }

    const buscarPokemon = async (pokemon) => {
        try {
            let url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resultado = await axios.get(url)
                setDatosPokemon(state => {
                    state = [...state, resultado.data]
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return state;
                })
        } catch (error) { }
    }

    useEffect(() => {
        cargarPokemons();
    }, [url])
    return (
        <>
            <div className="header">
                <h1>Listado de Pokemon</h1>
            </div>
            <div className="buscar">

            </div>

            <div className="container">
                <div className="left-content">
                    <Tarjeta pokemon={datosPokemon} cargando={cargando} informacion={poke => setTarjetaPokemon(poke)} />
                </div>
                <div className="right-content">
                    <InformacionPokemon data={tarjetaPokemon} />
                </div>
            </div>

            <div className="footer">
                <div className="btn-group">
                    {urlAnterior && <button onClick={() => {
                        setDatosPokemon([])
                        setUrl(urlAnterior)
                    }}>Atras</button>}

                    {siguienteUrl && <button onClick={() => {
                        setDatosPokemon([])
                        setUrl(siguienteUrl)
                    }}>Siguiente</button>}
                </div>
            </div>
        </>
    )
}
export default Main;