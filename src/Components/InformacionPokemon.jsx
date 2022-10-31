import React from "react";

const InformacionPokemon = ({ data }) => {
    return (
        <>
            {(!data) ? "" : (
                <>
                    <div className="info-pokemon">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <h2># {data.id}</h2>
                        <h1>{data.name}</h1>

                        <h2>Types</h2>
                        <div className="tipos">
                            {
                                data.types.map(pokeData => {
                                    return (
                                        <>
                                            <div className="group">
                                                <h3>{pokeData.type.name}</h3>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <h2>Peso </h2>
                        <h3>{data.weight} kg</h3>
                        <h2>Sprites </h2>
                        <div className="sprites">
                            <img src={data.sprites.front_default} alt="" />
                            <img src={data.sprites.front_shiny} alt="" />
                            <img src={data.sprites.back_default} alt="" />
                            <img src={data.sprites.back_shiny} alt="" />
                        </div>

                        <h2>Movimientos </h2>
                        <div className="movimientos">
                            {
                                data.moves.map(pokeData => {
                                    return (
                                        <>
                                            <h3>{pokeData.move.name}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default InformacionPokemon;