import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

export default class Book extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    Axios.get(`/books/individual/${this.props.match.params.isbn}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ book: res.data[0] });
      })
      .catch(err => console.error(err));
  }
  render() {
    const { book } = this.state;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 ">
            <div className="ml-5">
              <img src={book.image_url} style={{ width: '225px' }} alt="book-poster" />
              <button className="btn-dark btn btn-sm mt-3" style={{ width: '225px' }}>
                Save to Wishlist
              </button>
            </div>
          </div>
          <div className="col-8">
            <h2>{book.title}</h2>
            <p className="lead mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, at saepe
              facilis velit ab laborum, provident aliquid illo aspernatur maiores ea qui obcaecati
              vel alias natus exercitationem ex, necessitatibus odio. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Recusandae dolore enim modi! Quasi, labore
              exercitationem quo, magni amet expedita facilis minima consectetur, sequi ullam porro
              enim? Tempore id quos facilis.
            </p>
            <div className="row">
              <div className="col-4">
                <h5 className="mt-2 mb-5">By {book.author}</h5>
              </div>
              <div className="col">
                <h5 className="mt-2">Published: {book.original_publication_year}</h5>
              </div>
              <div className="col">
                <h5 className="mt-2">Average Rating: {book.average_rating}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button className="btn-danger btn w-100">Add to Cart</button>
              </div>
              <div className="col">
                <button
                  className="btn-success btn w-100"
                  onClick={() => this.props.history.push('/book/checkout/:isbn')}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
