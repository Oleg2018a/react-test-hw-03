import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContattForm.module.css'
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  formNameId = nanoid();
  formNumberId = nanoid()
  hendleChange = ({ currentTarget: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };
  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number:'',
    });
  };
  render() {
    return (
      <form onSubmit={this.hendleSubmit} className={css.form}>
        <label className={css.label} htmlFor="formNameId">Name</label>
        <input  className={css.input}
          onChange={this.hendleChange}
          type="text"
          name="name"
          value={this.state.name}
          id={this.formNameId}
          required
        />
        <label className={css.label} htmlFor={this.formNumberId}>Number</label>
        <input className={css.input}
          onChange={this.hendleChange}
          id={this.formNumberId}
          value={this.state.number}
          type="tel"
          name="number"
          required
        />
        <button className={css.buttonAdd} type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
