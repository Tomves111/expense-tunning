import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const { branding, icon } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <nav className="navbar navbar-expand-sm bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand"><i className={icon} />{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">
                                User
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </nav>
    );

};

Header.defaultProps = {
    icon: 'fab fa-github',
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

const headingStyle = {
    color: '#1230478',
    fontSize: '50px'
};

export default Header;
