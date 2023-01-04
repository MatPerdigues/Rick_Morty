import './home.css'
import {Fragment} from 'react'
import ListItems from '../listItems/listItems'


export default function Home (){
    return (
        <Fragment>
        
            
            <div className="container-fluid" id="container1">
                <h1>Proyecto - Rick & Morty</h1>
            
                <nav>
                    <ul>   
                        <ListItems dato={"Characters"}/>
                        <ListItems dato={"Contact"} />
                    </ul>
                </nav>    
                
            </div>
            
        </Fragment>
    )
}