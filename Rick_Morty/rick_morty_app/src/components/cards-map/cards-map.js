import { Fragment } from "react"
import{useEffect} from 'react'
import{useState} from 'react'
import CardStruct from "../card-struct/card-sctruct";
import FilterBtn from "../filter-btn/filter-btn";
import './cards-map.css'


export default function Cards () {

    let [datos, setDatos] = useState([]);
    let [infoCompleta, setInfoCompleta] = useState([]);


    const mostrarValor = (event) => {

        if (event.target.checked) {

            let datoFiltro = event.target.value;
            if (datoFiltro ==="Alive" || datoFiltro === "Dead") {
            let resultado =  datos.filter((ch)=> ch.status === datoFiltro) 
                setDatos(resultado)
            }
            if (datoFiltro === "Female" || datoFiltro === "Male") {
                let resultado = datos.filter((ch)=> ch.gender === datoFiltro)
                setDatos (resultado)
            }

            if (datoFiltro === "unknown") {
                let resultado = datos.filter((ch)=> ch.origin.name === datoFiltro) 
                setDatos (resultado)
            }
        } else {
            setDatos(infoCompleta)
        }}


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
            <div id="title">
                <h2>Filters</h2>
            </div>
            
            <section id="filter-section">
                <div id="filters">
                    <FilterBtn datoBtn="Alive Characters" id="btn1" datoFiltro="Alive" muestraValor={mostrarValor}/>
                    <FilterBtn datoBtn="Dead Characters" id="btn2" datoFiltro="Dead" muestraValor={mostrarValor}/>
                    <FilterBtn datoBtn="Male" id="btn3" datoFiltro="Male" muestraValor={mostrarValor}/>
                    <FilterBtn datoBtn="Female" id="btn4" datoFiltro="Female" muestraValor={mostrarValor}/>
                    <FilterBtn datoBtn="Origin Unknown" id="btn5" datoFiltro="unknown" muestraValor={mostrarValor}/>
                </div>
            </section>

            <section id="cards-section">
                <div id="cards">
                    {datos.map((dato)=>{
                        return <CardStruct key={dato.id} info={dato}/>
                    })}
                </div>
            </section>
           
            
        </Fragment>
    )
}
