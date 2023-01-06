import './filter-btn.css'

export default function FilterBtn({datoBtn, id, muestraValor, datoFiltro}) {



    return(
        <div className= "btn btn-primary" id="filter-div">
            <div className="form-check form-switch" id="filter-btn">
                <input className="form-check-input" type="checkbox" role="switch" id={id} value={datoFiltro} onChange={muestraValor}/>
                <label className="form-check-label" htmlFor={id}>{datoBtn}</label>
            </div>
        </div>
    )
}