import React from "react";

const Tarjeta = ({ pokemon, cargando, informacion }) => {
    return (
        <>
            {
                cargando ? <h1>Cargando...</h1> :
                    pokemon.map((item) => {
                        const estilo = item.types[0].type.name + " tarjeta";
                        return (
                            <>
                                <div className={estilo} key={item.id.toString()} onClick={() => informacion(item)}>
                                    <img src={item.sprites.other.dream_world.front_default} alt="" />                                    
                                    <h3># {item.id}</h3>
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }

        </>
    )
}
export default Tarjeta;
