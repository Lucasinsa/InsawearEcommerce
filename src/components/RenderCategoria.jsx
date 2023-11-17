import React from 'react'

const RenderCategoria = ({ categoryId }) => {
    //Función que define el titulo y subtitulo de la categoria visual
    const definirTexto = (titulo,subtitulo) => {
        return (
            <div>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
            </div>
        )
    }

    return (
        <div>
                {(categoryId === 'todos' || categoryId === undefined) && definirTexto("TODOS LOS PRODUCTOS","Descubrí todo nuestro catálogo")}
                {categoryId === 'remeras' && definirTexto("REMERAS","Encontrá nuestra amplia variedad y modelos de remeras")}
                {categoryId === 'trajes' && definirTexto("TRAJES","Elegancia sin igual: descubrí nuestra selección de trajes de vestir")}
                {categoryId === 'chombas' && definirTexto("CHOMBAS","Encontrá nuestra amplia variedad y modelos de chombas")}
                {categoryId === 'camisas' && definirTexto("CAMISAS","Encontrá nuestra amplia variedad y modelos de camisas")}
                {categoryId === 'pantalones' && definirTexto("PANTALONES","Encontrá nuestra amplia variedad y modelos de pantalones")}
        </div>
    )
}

export default RenderCategoria