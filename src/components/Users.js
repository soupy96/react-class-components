import React, { Component } from 'react';

import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  // the constructor function is used for State
  constructor() {
    // when you use the constructor in your class and you extend another class you need to call super
    super();
    // in classes state is always an object as compared to functional components where state can be anything: boolean, string, or an object, anything
    // state also has to be named "this.state"
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; DONT DO THIS
    // setState always takes an object or a function
    // react merges the changes in state and doesnt override
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  // the render method returns the JSX code that we want to render
  // we can define helper constants in the render method
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
