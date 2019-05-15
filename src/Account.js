import React, { Component } from 'react';
import Axios from 'axios';

const scroll = {
  position: 'absolute',
  padding: '5px',
  background: 'white',
  width: '75%',
  height: '450px',
  overflowY: 'scroll',
  marginTop: '45px'
};

const gradient = {
  background: 'black',
  overflow: 'hidden'
};

export default class Account extends Component {
  state = {
    credits: 0,
    books: []
  };

  componentDidMount() {
    if (!this.props.isAuthenticated) this.props.history.push('/');
    this.getUserCredits();
    Axios.get('/api/userinfo/books')
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.error(err));
  }

  getUserCredits = () => {
    Axios.get('/api/userinfo/credits')
      .then(res => {
        console.log(res.data);
        this.setState({ credits: res.data[0].rental_credits });
      })
      .catch(err => console.error(err));
  };

  returnBook = isbn => {
    console.log('here');
    console.log(isbn);
    Axios.post('/api/useractions/return', { isbn })
      .then(res => {
        this.setState({ books: res.data });
        this.getUserCredits();
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  render() {
    const { currentUser, isAuthenticated } = this.props;
    const { credits, books } = this.state;
    console.log(this.state);

    let booksRented;

    if (books.length !== 0)
      booksRented = books.map(book => (
        <div className="row mb-5 ml-5 mr-5" key={book.isbn}>
          <div className="col-3">
            <img
              src={book.image_url}
              style={{ width: '100px', marginLeft: '25%' }}
              alt="book-poster"
            />
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

            <div className="row">
              <div className="col">
                <p className="mt-2">
                  Due Date: <strong>{new Date(book.date_due).toDateString()}</strong>
                </p>
              </div>
              <div className="col">
                <p className="mt-2">
                  Checkout Date: <strong>{new Date(book.date_checked_out).toDateString()}</strong>
                </p>
              </div>
            </div>

            <div className="d-flex flex-row mt-2">
              <button className="btn btn-danger btn-sm mr-2 w-50">Write Review</button>
              <button
                className="btn btn-success btn-sm w-50"
                onClick={() => this.returnBook(book.isbn)}
              >
                Return Book
              </button>
            </div>
            <hr />
          </div>
        </div>
      ));
    else booksRented = <h4 className="mt-5 text-center">You have not checked out any books!</h4>;

    console.log(booksRented);
    return (
      <div className="container">
        <div className="card mt-3 ml-4 mr-4">
          <div className="card-body p-4 pl-5">
            <h5 className="pb-2">First Name: {currentUser.firstName}</h5>
            <h5 className="pb-2">Last Name: {currentUser.lastName}</h5>
            <h5 className="pb-2">Email: {currentUser.email}</h5>
            <h5>Credits: {credits}</h5>
          </div>
        </div>

        <div style={scroll}>{booksRented}</div>
      </div>
    );
  }
}
