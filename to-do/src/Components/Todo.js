import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default props =>
  <div style={{
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div
      style={{
        textDecoration: props.todo.complete ? 'line-through' : ''
      }}
      onClick={props.toggleComplete}>
      <Typography component="h2" variant="headline" gutterBottom>
        {props.todo.text}
      </Typography>
    </div>
    <Button color='secondary' onClick={props.onDelete}>x</Button>
  </div>