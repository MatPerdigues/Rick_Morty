import './listItems.css'

export default function ListItems ({dato}) {
    return (
        <ul id="ul-listItems">
            <li className="btn btn-success border-0" id="btn-list">{dato}</li>
        </ul>
    ) 
}

//className="btn btn-success" 