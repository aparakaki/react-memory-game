import React from "react"
import "./style.css"

const CharacterDisplay = props => (
    <div className="card charCard" >
        <img className="cardImg img-thumbnail" alt={props.id} src={props.image} onClick={() => props.characterClicked(props.id)}/>
    </div>
);


export default CharacterDisplay;