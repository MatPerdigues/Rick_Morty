import { Fragment } from "react";
import './card-struct.css'
import {useState} from 'react'



export default function CardStruct({info}){

    const [ocultar,setOcultar] = useState('true');

    const mostrar = () => {
        console.log(info);
        setOcultar (false);
        

    }
   

    const ocultarInfo = () => {
        setOcultar(true)
    }

      

    return(
        <Fragment>

            
            
            <div id="div-card-struct-total">
                <div className="card-div">    
                    <img src={info.image} alt={info.name} />
                    <h3 id="card-name">{info.name}</h3>
                    <div id="btn-div">
                        <button onClick={mostrar} type="button" className="btn btn-success" id="card-btn">Now More...</button>
                    </div>            
                </div> 

                {ocultar===false?

                <div id="div-externo">
                    <div id="div-deploy">
                        <div id="close-div">
                            <button type="button" class="btn-close" aria-label="Close" onClick={ocultarInfo} id="close-btn"></button>
                        </div>
                        <ul className="list-group" id="ul">
                            <li className="list-group-item">Character Status <span className="span">{info.status}</span></li>
                            <li className="list-group-item">Species <span className="span">{info.species}</span></li>
                            <li className="list-group-item">Origin <span className="span">{info.origin.name}</span></li>
                            <li className="list-group-item">Gender <span className="span">{info.gender}</span></li>
                        </ul>
                    </div>
                </div>: ''}
            </div> 
        </Fragment>
    )
}

