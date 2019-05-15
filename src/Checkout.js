import React, { Component } from 'react';
import Axios from 'axios';

export default class Checkout extends Component {
  state = {
    book: {},
    credits: 2
  };

  componentDidMount() {
    Axios.get(`/books/individual/${this.props.match.params.isbn}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ book: res.data[0] });
      })
      .catch(err => console.error(err));
    this.getUserCredits();
  }

  getUserCredits = () => {
    Axios.get('/api/userinfo/credits')
      .then(res => {
        console.log(res.data);
        this.setState({ credits: res.data[0].rental_credits });
      })
      .catch(err => console.error(err));
  };

  checkout = () => {
    Axios.post('/api/useractions/borrow', { isbn: this.state.book.isbn })
      .then(res => {
        console.log(res);
        this.props.history.push('/account');
      })
      .catch(err => console.error(err));
  };

  render() {
    const { book } = this.state;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div className="ml-5">
              <img src={book.image_url} style={{ width: '225px' }} alt="book-poster" />
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

            <div className="row mb-3">
              <div className="col">
                <p className="">
                  Due Date: <strong>{new Date(Date.now() + 12096e5).toDateString()}</strong>
                </p>
              </div>
              <div className="col">
                <p className="">
                  Checkout Date: <strong>{new Date().toDateString()}</strong>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button
                  className="btn-success btn w-100"
                  onClick={this.checkout}
                  disabled={this.state.credits === 0 ? true : false}
                >
                  {this.state.credits === 0 ? 'No Credits Remaining' : 'Checkout'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Return date  cehckout date show these   show credits
