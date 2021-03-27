import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Routing/Navbar/Navbar';
import HomePage from './Routing/HomePage/HomePage';
import Summery from './Routing/Summery/Summery';
import Aboutus from './Routing/Aboutus/Aboutus';
import Contactus from './Routing/Contactus/Contactus';

function App(){
    return<>
    <Router>
    <Navbar />
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/summery" component={Summery} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contactus" component={Contactus} />
        </Switch>
    </Router>
    </>
}
export default App;