import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Characters from '../characters/characters'
import Contact from '../contact/contact'
import Home from '../home/home'

export default function Ruteo () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}