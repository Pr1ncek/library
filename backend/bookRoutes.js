// const express = require('express');
// const router = express.Router();
// const mysqlConnection = require('./index');

// const c1 =
//   'SELECT title FROM book INNER JOIN genre ON book.genre_id=genre.genre_id GROUP BY genre.genre_id';
// const c2 = 'SELECT * from genre';
// const c3 = 'SELECT * from book, genre WHERE book.genre_id=genre.genre_id AND name ';

// // Get info about individual book
// router.get('/books/individual/:isbn', (req, res) => {
//   const singleBookInfo = 'SELECT * FROM book WHERE book.isbn=' + req.params.isbn;
//   mysqlConnection.query(singleBookInfo, (err, rows, fields) => {
//     if (!err) {
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// //Grab top 25 books by category
// const top25Mystery =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=1 LIMIT 25';
// const top25Fantasy =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=2 LIMIT 25';
// const top25Romance =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=3 LIMIT 25';
// const top25ActionandAdv =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=4 LIMIT 25';
// const top25Horror =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=5 LIMIT 25';
// const top25SciFi =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=6 LIMIT 25';
// const top25ShortStory =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=7 LIMIT 25';
// const top25Biography =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=8 LIMIT 25';
// const top25Poetry =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=9 LIMIT 25';
// const top25Self_help =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
//   'WHERE book.genre_id=genre.genre_id AND genre.genre_id=10 LIMIT 25';
// const top25Other =
//   'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book ' +
//   'WHERE average_rating>4.2 LIMIT 25';

// // Get top 25 Mystery books from DB
// router.get('/top25/mystery', (req, res) => {
//   console.log('hello');
//   mysqlConnection.query(top25Mystery, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Fantasy books from DB
// router.get('/books/top25/fantasy', (req, res) => {
//   mysqlConnection.query(top25Fantasy, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Romance books from DB
// router.get('/books/top25/romance', (req, res) => {
//   mysqlConnection.query(top25Romance, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Action and Adventure books from DB
// router.get('/books/top25/actionandadventure', (req, res) => {
//   mysqlConnection.query(top25ActionandAdv, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Horror books from DB
// router.get('/books/top25/horror', (req, res) => {
//   mysqlConnection.query(top25Horror, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Science Fiction books from DB
// router.get('/books/top25/sci-fi', (req, res) => {
//   mysqlConnection.query(top25SciFi, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Short Story books from DB
// router.get('/books/top25/short-story', (req, res) => {
//   mysqlConnection.query(top25ShortStory, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Biography books from DB
// router.get('/books/top25/biography', (req, res) => {
//   mysqlConnection.query(top25Biography, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Poetry books from DB
// router.get('/books/top25/poetry', (req, res) => {
//   mysqlConnection.query(top25Poetry, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 Self-help books from DB
// router.get('/books/top25/self-help', (req, res) => {
//   mysqlConnection.query(top25Self_help, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// // Get top 25 *other* undefined genre books from DB
// router.get('/books/top25/other', (req, res) => {
//   mysqlConnection.query(top25Other, (err, rows, fields) => {
//     if (!err) {
//       console.log(rows);
//       res.status(200).json(rows);
//     } else {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   });
// });

// module.exports = router;
