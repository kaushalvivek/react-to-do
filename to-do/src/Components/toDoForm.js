import React from 'react';
import shortid from 'shortid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class ToDoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      complete: false,
      id: shortid.generate()
    })
    this.setState({
      text: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="text"
          placeholder="Enter To Do Item..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button type='submit'>Add To List</Button>
      </form>
    );
  };
}