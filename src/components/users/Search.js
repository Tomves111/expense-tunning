import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input type="text" name="text" placeholder="Search user..." className="form-control" value={this.state.text}
                    onChange={this.onChange}/>
                    <br/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                <br />
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        );
    }
}

export default Search;