import React from 'react';
import Axios from 'axios';
import './App.css';
import Navbar from './Navbar';
import BookList from './BookList';

const books = {};

class App extends React.Component {
  state = {
    mystery: [],
    fantasy: [],
    romance: [],
    actionAdventure: [],
    horror: [],
    sciFi: [],
    shortStory: [],
    biography: [],
    poetry: [],
    selfHelp: [],
    other: []
  };

  componentDidMount() {
    Axios.get('/books/top25/mystery')
      .then(res => {
        console.log(res);
        this.setState({ mystery: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/fantasy')
      .then(res => {
        console.log(res);
        this.setState({ fantasy: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/romance')
      .then(res => {
        console.log(res);
        this.setState({ romance: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/sci-fi')
      .then(res => {
        console.log(res);
        this.setState({ sciFi: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/horror')
      .then(res => {
        console.log(res);
        this.setState({ horror: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/short-story')
      .then(res => {
        console.log(res);
        this.setState({ shortStory: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/biography')
      .then(res => {
        console.log(res);
        this.setState({ biography: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/poetry')
      .then(res => {
        console.log(res);
        this.setState({ poetry: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/self-help')
      .then(res => {
        console.log(res);
        this.setState({ selfHelp: res.data });
      })
      .catch(err => console.error(err));

    Axios.get('/books/top25/other')
      .then(res => {
        console.log(res);
        this.setState({ other: res.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    const {
      mystery,
      fantasy,
      romance,
      sciFi,
      horror,
      shortStory,
      biography,
      poetry,
      selfHelp,
      other
    } = this.state;
    return (
      <div className="container">
        <Navbar />
        <h2 className="mt-3">Top 25</h2>
        <BookList books={other} />
        <h2 className="mt-4">Mystery</h2>
        <BookList books={mystery} />
        <h2 className="mt-2">Romance</h2>
        <BookList books={romance} />
        <h2 className="mt-2">Self Help</h2>
        <BookList books={selfHelp} />
        {/* <h2 className="mt-2">Action & Adventure</h2>
        <BookList books={actionAdventure} /> */}
        <h2 className="mt-2">Horror</h2>
        <BookList books={horror} />
        <h2 className="mt-2">Science Fiction</h2>
        <BookList books={sciFi} />
        <h2 className="mt-2">Short Story</h2>
        <BookList books={shortStory} />
        <h2 className="mt-2">Biography</h2>
        <BookList books={biography} />
        <h2 className="mt-2">Poetry</h2>
        <BookList books={poetry} />
        <h2 className="mt-2">Fantasy</h2>
        <BookList books={fantasy} />
      </div>
    );
  }
}

export default App;
