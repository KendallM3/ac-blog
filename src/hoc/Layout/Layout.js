import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

import { Link } from "gatsby"
const ListLink = props => (
  <li className={classes.ListLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }

    render () {
        return(
            <div className={classes.Layout}>
                <header className={classes.Toolbar}>
                    <DrawerToggle clicked={this.sideDrawerToggleHandler} />
                    <nav style={{height: '100%'}}className={classes.DesktopOnly}>
                        <NavigationItems />
                    </nav>
                </header>   
                <main className={classes.Content}>
                    {this.props.children}
                </main>             
            </div>
        )
    }
}

export default (Layout);