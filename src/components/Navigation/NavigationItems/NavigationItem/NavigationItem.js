import React from 'react';
import { Link } from 'gatsby';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);
  
export default (navigationItem);
