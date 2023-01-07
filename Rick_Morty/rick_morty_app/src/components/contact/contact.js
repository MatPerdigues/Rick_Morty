import { Fragment } from 'react'
import './contact.css'
import Header from '../header/header'

export default function Contact () {
    return(
        <Fragment>
            
            <Header/>
            <main>

                    <div id="div-form">
                        <div id="title-contact">
                            <h1 id="h1-contact">Contact</h1>
                            <h2 id="h2-contact">Leave us your information so we can contact you</h2>
                        </div>
                        <form>

                            <div id="div-form1">
                                <div className="mb-3" id="div-form2">
                                    <label htmlFor="exampleFormControlText1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlText1"/>
                                </div>
                            
                                <div className="mb-3" id="div-form3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                                </div>
                            </div>
                           
                           <div class="mb-3" id="div-form4">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <input type="submit" id="submit" value="Sign in" class="btn btn-secondary"/>
                        
                        </form>

                    </div>


            </main>
            
            
        
        </Fragment>
    )   
}