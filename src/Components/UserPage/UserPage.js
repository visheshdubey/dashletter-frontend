import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Body from './Body/Body';

class UserPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar userName="Vishesh"/>
                <br/>
                <Body />
            </React.Fragment>
        );
    }
}

export default UserPage;