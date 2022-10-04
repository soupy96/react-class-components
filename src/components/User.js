import React, { Component } from 'react';

import classes from './User.module.css';

// using extends Component on this class allows us to use and pass in props
class User extends Component {
  render() {
    // we are only able to use "this."" is because of the extends Component
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
