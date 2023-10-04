
import css from './Modal.module.css';


import React, { Component } from 'react'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('жмяк на ескапе');
        this.props.toggleModal();
      }
    });
  }
    componentWillUnmount() {
      window.removeEventListener('keydown')
  }
  render() {
    return (
      <div className={css.backdrop}>
        <div className={css.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal