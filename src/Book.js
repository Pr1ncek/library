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

const cardStyle = {
  border: '1px solid grey',
  borderRadius: '1px',
  padding: '2%'
};

export default class Book extends Component {
  state = {
    book: {},
    savedToCart: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    Axios.get(`/books/individual/${this.props.match.params.isbn}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ book: res.data[0] });
      })
      .catch(err => console.error(err));
  }

  addToCart = () => {
    Axios.post('/api/useractions/cart', { isbn: this.state.book.isbn })
      .then(res => {
        console.log(res.data[0]);
        this.setState({ savedToCart: true }, () => {
          setTimeout(() => this.setState({ savedToCart: false }), 1500);
        });
      })
      .catch(err => console.error(err));
  };

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
                <button className="btn-danger btn w-100" onClick={this.addToCart}>
                  {this.state.savedToCart ? 'Saved to Cart!' : 'Add to Cart'}
                </button>
              </div>
              <div className="col">
                <button
                  className="btn-success btn w-100"
                  onClick={() => this.props.history.push(`/book/checkout/${book.isbn}`)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-4">
          <h2 className="ml-2 mb-4 mt-3">Reviews</h2>
          <div className="row ml-2 mb-5">
            <div style={cardStyle} className="mb-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in exercitationem
              necessitatibus eligendi, illo ex. Sint distinctio deleniti est, temporibus voluptatem
              qui eveniet adipisci, laborum sequi quaerat maiores iste impedit! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Libero sequi dolore impedit, deleniti
              molestiae at cumque ipsam sed sapiente odio dolorem quidem eligendi minima tenetur!
              Assumenda vel eius pariatur laboriosam.
              <footer class="blockquote-footer mt-3 align-right">Prince Chaudhary</footer>
            </div>
            <hr />
            <div style={cardStyle} className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in exercitationem
              necessitatibus eligendi, illo ex. Sint distinctio deleniti est, temporibus voluptatem
              qui eveniet adipisci, laborum sequi quaerat maiores iste impedit! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Libero sequi dolore impedit, deleniti
              molestiae at cumque ipsam sed sapiente odio dolorem quidem eligendi minima tenetur!
              Assumenda vel eius pariatur laboriosam.
              <footer class="blockquote-footer mt-3 align-righ ">Alan Turing</footer>
            </div>

            <div style={cardStyle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in exercitationem
              necessitatibus eligendi, illo ex. Sint distinctio deleniti est, temporibus voluptatem
              qui eveniet adipisci, laborum sequi quaerat maiores iste impedit! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Libero sequi dolore impedit, deleniti
              molestiae at cumque ipsam sed sapiente odio dolorem quidem eligendi minima tenetur!
              Assumenda vel eius pariatur laboriosam.
              <footer class="blockquote-footer mt-3 align-right">Chris Tibs</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
