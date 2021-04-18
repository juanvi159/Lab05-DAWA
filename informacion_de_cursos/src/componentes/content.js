import React, { Fragment } from 'react';
import Part from './part';

export default function Content({parts}){
    return(
        <div>
            {parts.map((value,index) => {
                return (
                    <Fragment>
                        <h3>Parte {index+1}</h3>
                        <Part part={value}/>
                    </Fragment>
                )
            })}
        </div>
    );
} 