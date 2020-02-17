import React from 'react';

export default function Pelicula(props){
    const {titulo} = props;
    return(
        <div>
            <h2>{titulo}</h2>
        </div>
    );
}
