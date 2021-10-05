import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Deposit from './Components/Screens/Deposit'
import Withdrawn from './Components/Screens/Withdrawn'
import Home from './Home'
export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/deposit" component={Deposit} />
            <Route exact path="/withdraw" component={Withdrawn} />
        </BrowserRouter>
    )
}
