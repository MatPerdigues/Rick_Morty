import { Fragment } from 'react'
import './listItems.css'

export default function ListItems ({dato}) {
    return (
        <Fragment>
            <div id="div-listItems">
                <ul id="ul-listItems">
                    <li className="btn btn-success border-0" id="btn-list">{dato}</li>
                </ul>
            </div>
        </Fragment>
    ) 
}

//className="btn btn-success" 