import React from 'react';
import Toolbar from './Toolbar/Toolbar';

class UserPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar userName="Vishesh"/>
            </React.Fragment>
        );
    }
}

export default UserPage;