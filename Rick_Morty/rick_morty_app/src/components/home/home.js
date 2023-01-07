import './home.css'
import {Fragment} from 'react'
import ListItems from '../listItems/listItems'
import {Link} from 'react-router-dom'


export default function Home (){
    return (
        <Fragment>
        
            
            <div className="container-fluid" id="container1">
                <h1 id="home-title">Proyecto - Rick & Morty</h1>
            
                <nav id="nav-home">
                    <ul id="ul-home">   
                        <Link to = "/characters"><ListItems dato={"Characters"}/></Link>
                        <Link to = "/contact"><ListItems dato={"Contact"} /></Link>
                    </ul>
                </nav>    
                
            </div>
            
        </Fragment>
    )
}