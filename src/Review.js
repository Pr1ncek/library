import React, { Component } from 'react';

export default class Review extends Component {
  state = {
    review: ''
  };
  render() {
    return (
      <div>
        <div class="input-group">
          <textarea class="form-control" aria-label="With textarea" />
        </div>
      </div>
    );
  }
}
