import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';
import './Userpage.scss';
import {NavLink} from 'react-router-dom';

class UserPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar userName="Vishesh"/>
                <div class="wrapper">
                    <div class="sidebar">
                        <h5>Osama Abrar</h5>
                        <ul>
                            <div activeClassName="active"><li><NavLink exact to="/user/inbox"><i class="fas fa-envelope-open-text"></i>INBOX</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user"><i className="fas fa-home"></i>Home</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Favourites"><i className="fas fa-star"></i>Favourites</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Trending"><i className="fas fa-fire"></i>Trending</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Subscribed"><i className="fas fa-atlas"></i>Subscribed</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Settings"><i className="fas fa-users-cog"></i>Settings</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Create">Create a Team</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Folders"><i className="fas fa-folder"></i>Folders</NavLink></li></div>
                            <div activeClassName="active"><li><NavLink exact to="/user/Trash"><i className="fas fa-trash-alt"></i>Trash</NavLink></li></div>
                        </ul> 
                    </div>
                    <div class="main_content">
                       <Body/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserPage;