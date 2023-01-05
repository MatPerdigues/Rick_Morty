import { Fragment } from "react"
import{useEffect} from 'react'
import{useState} from 'react'
import CardStruct from "../card-struct/card-sctruct";


export default function Cards () {

    let [datos, setDatos] = useState([]);
    let [infoCompleta, setInfoCompleta] = useState([]);


    const traerInfo=async()=>{
        let info= await fetch("https://rickandmortyapi.com/api/character")
        .then(respuesta => respuesta.json())
        .catch(error => console.log("HAY UN ERROR!!" +error))
        
        return info
    }


    const mostrarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
       
    }

    useEffect(()=>{
        mostrarInfo()
      
     },[])

    
    return (
        <Fragment>
            {datos.map((dato)=>{
                return <CardStruct key={dato.id} info={dato}/>
            })}
            
        </Fragment>
    )
}