import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BookList extends Component {
  render() {
    return (
      <div className="scrolling-wrapper-flexbox mb-5">
        {this.props.books.map(book => (
          <div className="card" key={book.isbn}>
            <div style={{ width: '25%', padding: '20px' }}>
              <img src={book.image_url} style={{ height: '150px', paddingLeft: '35px' }} />
              <p
                className="mt-4 text-center"
                style={{ width: '175px', height: '50px', overflowY: 'hidden' }}
              >
                {book.title}
              </p>
              <button
                onClick={() => this.props.history.push(`/book/${book.isbn}`)}
                className="btn btn-sm btn-danger pl-5 pr-5 ml-4"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(BookList);
