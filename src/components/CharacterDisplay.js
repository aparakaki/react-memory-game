import React from "react"
import characters from "../characters.json"
import "./style.css"

class CharacterDisplay extends React.Component {
    state = {
        characters: [...characters]
    }

    render() {
        return (
            <div className="row" >
                <div className="col-md-2"></div>
                <div className="col-md-8 img-container">
            {characters.map(item => {
                return (
                    <div className="card">
                        <img className="cardImg img-thumbnail" alt={item.id} src={item.image} />
                    </div>
                )
            })}
                </div>
                <div className="col-md-2"></div>
            </div>
        )}
    
}

export default CharacterDisplay;