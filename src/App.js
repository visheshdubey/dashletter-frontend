import React from 'react';
import IndexPage from'./Components/IndexPage/IndexPage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
        <Switch>
                {/* <Route path="/user" component={UserdashBoard} /> */}
                <Route path="/" component={IndexPage} />
        </Switch>
      );
    }
}

export default App;