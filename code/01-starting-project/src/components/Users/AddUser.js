import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from './../UI/Button';
import { Component } from 'react';

const AddUser = props => {
  const addUserHandler = e => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlfor="username">Username</label>
        <input type="text" id="username" />
        <label htmlfor="age">Age (Years)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
