import { Fragment } from 'react'
import ListItems from '../listItems/listItems'
import './header.css'

export default function Header () {
    return(
        <Fragment>
            <header className='d-flex'>
                <h3 id="title-header">Rick & Morty</h3>
                <ul id="ul-header">
                    <ListItems dato="Home"/>
                    <ListItems dato="Characters"/>
                    <ListItems dato="Contact"/>
                </ul>
            </header>
        </Fragment>
    )
}