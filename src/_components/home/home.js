import React, { Component } from 'react';
import { HashRouter as Router , Route,Switch} from "react-router-dom";
import routes from '../../routes';
import Header from '../common/header' 
import Footer from '../common/footer'; 
class HomePage extends Component {
    render() {
        return (
            <div className="inner-router">
                <Router> 
                    <div className="main">
                        <Header />                    
                        <div className="content">
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                        <route.component {...props} />
                                    )} />)
                                        : (null);
                                },
                                )}  
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </div>           
        )
    }
}
export default HomePage;