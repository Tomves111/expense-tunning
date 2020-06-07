import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from 'axios';
import User from "./components/users/User";
import { HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false
    };

    searchUsers = async text => {
        const res = await axios
            .get(`https://api.github.com/search/users?q=${text}`);

        this.setState({users: res.data.items, loading: false })
    };



    clearUsers = () => this.setState({users: [], loading: false});



    render() {
        const {users, user, loading} = this.state;

        return (
            <Router>
            <div className="App">
                <Header branding="Github finder"/>
                <Switch>
                <Route exact path='/' render={props => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Fragment>
                        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>
                        <Users loading={this.state.loading} users={this.state.users}/>
                    </Fragment>
                )} />
                <Route exact path='/user' render={props => (
                    <Fragment>
                       <User  onLayoutChange={this.state.layout}/>
                    </Fragment>
                )}/>
                    <Route exact path='/user/about' render={props => (
                     // eslint-disable-next-line react/jsx-no-undef
                        <Fragment>
                            <User onLayoutChange={this.state.layout}/>
                        </Fragment>
                    )} />
                </Switch>
            </div>
            </Router>
        )
    }
}

export default App;
