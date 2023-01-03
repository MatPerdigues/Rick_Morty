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
                        <ListItems dato={"Contact"}/>
                        <ListItems dato={"Characters"} />
                    </ul>
                </nav>    
                
            </div>
            
        </Fragment>
    )
}