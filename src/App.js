import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Routing/Navbar/Navbar';

function App(){
    return<>
    <Router>
    <Navbar />
        <Switch>
            <Route exact path="/home" />
            <Route exact path="/summery" />
            <Route exact path="/aboutus" />
            <Route exact path="/contactus" />
        </Switch>
    </Router>
    </>
}
export default App;