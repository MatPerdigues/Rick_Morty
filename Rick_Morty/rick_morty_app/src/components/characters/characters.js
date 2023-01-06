import './characters.css'
import {Fragment} from 'react'
import Header from '../header/header'
import Cards from '../cards-section/cards-section'


export default function Characters () {
    return (
        <Fragment>
            
            <Header/>
            <main>
                <Cards/>
            </main>
        </Fragment>
    )
}