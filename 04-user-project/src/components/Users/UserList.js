import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = props =>{

    let userListContent = <p style={{padding:10}}>No users added!</p>;

    if (props.users.length>0){
        userListContent = (<ul>
            {props.users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>);
    }
    return <Card className={classes.users}>{userListContent}</Card>;
}

export default UserList;