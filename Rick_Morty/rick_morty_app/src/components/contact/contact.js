import { Fragment } from 'react'
import './contact.css'
import Header from '../header/header'

export default function Contact () {
    return(
        <Fragment>
            
            <Header/>
            <main>

                <div id="div-form">
                        <h1>Contact</h1>
                        <h2>Leave us your information so we can contact you</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>

                    </div>


            </main>
            
            
        
        </Fragment>
    )   
}