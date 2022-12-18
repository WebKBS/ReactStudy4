import React from "react";
import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
            {user.id}
          </li>
        ))}
      </div>
    </Card>
  );
};

export default UserList;
