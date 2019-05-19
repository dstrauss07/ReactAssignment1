import React from 'react';
import { tsPropertySignature } from '@babel/types';

const UserInput = (props) =>{
    return  <input class="userInput" type="text" onChange={props.changed} value={props.name}/>
}

export default UserInput;