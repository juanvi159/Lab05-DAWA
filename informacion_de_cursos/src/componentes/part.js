import React, { Fragment } from 'react';

export default function Part({part}){
    return(
        <Fragment>
            <p>Id: {part.id}</p>
            <p>Nombre: {part.name}</p>
            <p>Ejercicios: {part.exercises}</p>
        </Fragment>
    );
} 