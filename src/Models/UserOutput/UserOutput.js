import React from 'react';
import { tsPropertySignature } from '@babel/types';

const UserOutput = (props) =>{

    return (
        <div>
            <p> My Name is {props.name}</p>
            <p> My Name is {props.name2}</p>
        </div>
    )

}

export default UserOutput;