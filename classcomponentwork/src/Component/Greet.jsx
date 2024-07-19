import React from 'react';
export default function Greet(props){
console.log(props)
    return(
        <div>
            <p>
Hello  {props.name}
            </p>
        </div>
    )
}