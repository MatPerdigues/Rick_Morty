import { Fragment } from 'react'
import ListItems from '../listItems/listItems'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header () {
    return(
        <Fragment>
            <header className='d-flex'>
                <h3 id="title-header">Rick & Morty</h3>
                <ul id="ul-header">
                    <Link to = '/'><ListItems dato="Home"/></Link>
                    <Link to = '/characters'><ListItems dato="Characters"/></Link>
                    <Link to = '/contact'><ListItems dato="Contact"/></Link>
                </ul>
            </header>
        </Fragment>
    )
}