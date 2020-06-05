import React, {Component} from 'react';
import {Link} from 'react-router-dom'
const UserItem = (props) => {
    
        const { login, avatar_url, html_url } = props.user;

        return (
            <div className="card text-center">
                <div>
                <img
                     src={avatar_url}
                     alt=''
                     className='rounded-circle'
                     style={{ width: '60px' }}
                     />
                </div>
                    <h3>{login}</h3>
                    <div>
                        <a href={html_url} className="btn btn-dark">More</a>
                        <Link to='/library' className="btn btn-primary">Save</Link>
                    </div>
            </div>
        );
};

export default UserItem;