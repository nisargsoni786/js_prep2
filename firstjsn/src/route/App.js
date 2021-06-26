import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';

function App() {
    return (
        <div>
            <Nav/>
            <Switch>        
                 <Route exact path='/' component={Home} />
                 <Route exact path='/about' component={About} />
                 <Route exact path='/contact' component={Contact} />
            </Switch>
            .................
            <Nav/>

        </div>
    )
}

export default App
