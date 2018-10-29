import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About, Posts} from 'pages';
import {Menu, ShowPageInfo} from 'components';

class App extends Component {
    render(){
        return (
            <div>
                <Menu />
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about/:name?" component={About}/>
                    <Route path="/posts" component={Posts}/>
                    <ShowPageInfo />
                </div>
            </div>
        );
    }
}

export default App;