import React, { Fragment } from 'react';
import Part from './part';

export default function Content({parts}){
    
    var ejer = []
    for (var part in parts){
        ejer.push(parts[part].exercises)
    }
    const total = ejer.reduce((s, p) => s+p)

    return(
        <div>
            {parts.map((value,index) => {
                return (
                    <Fragment>
                        <h3>Parte: {index+1}</h3>
                        <Part part={value}/>
                    </Fragment>
                )
            })}
            <h2>Total de ejercicios: {total}</h2>
        </div>
    );
} 