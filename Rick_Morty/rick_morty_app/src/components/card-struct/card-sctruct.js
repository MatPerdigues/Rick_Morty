import { Fragment } from "react";
import './card-struct.css'


export default function CardStruct({info}){
    return(
        <Fragment>
            <div id="card-div">    
                <img src={info.image} alt={info.name} />
                <h3 id="card-name">{info.name}</h3>
                <div id="btn-div">
                    <button type="button" className="btn btn-success" id="card-btn">Now More...</button>
                </div>            
            </div>
        </Fragment>
    )
}