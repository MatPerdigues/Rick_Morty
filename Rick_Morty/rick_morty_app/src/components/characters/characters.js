import './characters.css'
import {Fragment} from 'react'
import Header from '../header/header'
import FilterBtn from '../filter-btn/filter-btn'

export default function Characters () {
    return (
        <Fragment>
            
            <Header/>
            <main>
                <section id="filters-section">

                    <h2 id="filters-title">Filters</h2>

                    <div id="filters">
                        <FilterBtn datoBtn="Alive Characters" id="btn1"/>
                        <FilterBtn datoBtn="Dead Characters" id="btn2"/>
                        <FilterBtn datoBtn="Male" id="btn3"/>
                        <FilterBtn datoBtn="Female" id="btn4"/>
                        <FilterBtn datoBtn="Origin Unknown" id="btn5"/>
                        
                        
                    </div>
                </section>
            </main>
        </Fragment>
    )
}