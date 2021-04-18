import React, { Fragment } from 'react';
import Header from './header'
import Content from './content';

export default function Course({course}) {
    return(
        <Fragment>
            {course.map((value,index) => {
                return (
                    <div>
                        <Header title={course[index].name}/>
                        <Content content={value.id} parts={value.parts}/>
                    </div>
                );
            })}
        </Fragment>
    );
} 