import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const scroll = {
  position: 'absolute',
  padding: '5px',
  background: 'white',
  width: '75%',
  height: '550px',
  overflowY: 'scroll',
  marginTop: '45px'
};

export default class Search extends Component {
  state = {
    searchTerm: '',
    books: []
  };

  addToCart = isbn => {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/login');
      return;
    }
    Axios.post('/api/useractions/cart', { isbn })
      .then(res => {
        console.log(res.data[0]);
      })
      .catch(err => console.error(err));
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    Axios.post('/api/books/search', { searchTerm })
      .then(res => {
        this.setState({ books: res.data });
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { searchTerm, books } = this.state;

    const bookList = books.map(book => (
      <div className="row mb-5" key={book.isbn}>
        <div className="col-3">
          <Link to={`/book/${book.isbn}`}>
            <img
              src={book.image_url}
              style={{ width: '100px', marginLeft: '25%' }}
              alt="book-poster"
            />
          </Link>
        </div>
        <div className="col-9">
          <h5>{book.title}</h5>
          <div className="row">
            <div className="col-4">
              <p className="mt-3">By {book.author}</p>
            </div>
            <div className="col">
              <p className="mt-3">Published: {book.original_publication_year}</p>
            </div>
            <div className="col">
              <p className="mt-3">Average Rating: {book.average_rating}</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <button
                className="btn-danger btn w-100 btn-sm"
                onClick={() => this.addToCart(book.isbn)}
              >
                Add to Cart
              </button>
            </div>
            <div className="col">
              <button
                className="btn-success btn w-100 btn-sm"
                onClick={() => this.props.history.push(`/book/checkout/${book.isbn}`)}
              >
                Checkout
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <div className="container mt-4">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Book Title, ISBN, Genre"
              name="searchTerm"
              value={searchTerm}
              onChange={this.handleChange}
            />
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-danger pl-5 pr-5"
                type="button"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div style={scroll}>{bookList}</div>
        </div>
      </React.Fragment>
    );
  }
}
