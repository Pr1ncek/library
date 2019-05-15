import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

export default class Cart extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.props.cart.forEach(isbn => this.getMovieInfo(isbn));
  }

  getMovieInfo = isbn => {
    let books;
    Axios.get(`/books/individual/${isbn}`)
      .then(res => {
        console.log(res.data[0]);
        books = this.state.books;
        books.push(res.data[0]);
        this.setState({ books });
      })
      .catch(err => console.error(err));
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="container">
        <h1 className="display-5 mt-3 mb-5">My Cart</h1>
        {this.state.books.map(book => (
          <div className="row mb-5 ml-5 mr-5">
            <div className="col-4">
              <img src={book.image_url} style={{ width: '100px' }} alt="book-poster" />
            </div>
            <div className="col-8">
              <h5>{book.title}</h5>
              <div className="row">
                <div className="col-4">
                  <p className="mt-2 mb-5">By {book.author}</p>
                </div>
                <div className="col">
                  <p className="mt-2">Published: {book.original_publication_year}</p>
                </div>
                <div className="col">
                  <p className="mt-2">Average Rating: {book.average_rating}</p>
                </div>
              </div>
              <button className="btn btn-danger btn-sm mr-2 w-25">Remove</button>
              <button className="btn btn-success btn-sm w-25">Checkout</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
