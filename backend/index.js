const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('./config/keys');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: 'cs157b.cta2gevu5nsx.us-east-2.rds.amazonaws.com',
  user: 'chris',
  password: 'Password123',
  database: 'cs157b'
});

mysqlConnection.connect(err => {
  if (!err) console.log('DB connection successful');
  else console.log('DB connection failed \n ERROR: ' + JSON.stringify(err, undefined, 2));
});

app.listen(5000, () => console.log('Express server is running...'));

const c1 =
  'SELECT title FROM book INNER JOIN genre ON book.genre_id=genre.genre_id GROUP BY genre.genre_id';
const c2 = 'SELECT * from genre';
const c3 = 'SELECT * from book, genre WHERE book.genre_id=genre.genre_id AND name ';

//Grab top 25 books by category
const top25Mystery =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=1 LIMIT 25';
const top25Fantasy =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=2 LIMIT 25';
const top25Romance =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=3 LIMIT 25';
const top25ActionandAdv =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=4 LIMIT 25';
const top25Horror =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=5 LIMIT 25';
const top25SciFi =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=6 LIMIT 25';
const top25ShortStory =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=7 LIMIT 25';
const top25Biography =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=8 LIMIT 25';
const top25Poetry =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=9 LIMIT 25';
const top25Self_help =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book, genre ' +
  'WHERE book.genre_id=genre.genre_id AND genre.genre_id=10 LIMIT 25';
const top25Other =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating from book ' +
  'WHERE average_rating>4.2 LIMIT 25';

// Get top 25 Mystery books from DB
app.get('/books/top25/mystery', (req, res) => {
  mysqlConnection.query(top25Mystery, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Fantasy books from DB
app.get('/books/top25/fantasy', (req, res) => {
  mysqlConnection.query(top25Fantasy, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Romance books from DB
app.get('/books/top25/romance', (req, res) => {
  mysqlConnection.query(top25Romance, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Action and Adventure books from DB
app.get('/books/top25/actionandadventure', (req, res) => {
  mysqlConnection.query(top25ActionandAdv, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Horror books from DB
app.get('/books/top25/horror', (req, res) => {
  mysqlConnection.query(top25Horror, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Science Fiction books from DB
app.get('/books/top25/sci-fi', (req, res) => {
  mysqlConnection.query(top25SciFi, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Short Story books from DB
app.get('/books/top25/short-story', (req, res) => {
  mysqlConnection.query(top25ShortStory, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Biography books from DB
app.get('/books/top25/biography', (req, res) => {
  mysqlConnection.query(top25Biography, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Poetry books from DB
app.get('/books/top25/poetry', (req, res) => {
  mysqlConnection.query(top25Poetry, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 Self-help books from DB
app.get('/books/top25/self-help', (req, res) => {
  mysqlConnection.query(top25Self_help, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// Get top 25 *other* undefined genre books from DB
app.get('/books/top25/other', (req, res) => {
  mysqlConnection.query(top25Other, (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

//View Book Page (currently no prices, delete comment later)
//add to cart is front end stored and executed operations
//publisher id for a route to search books by publisher, maybe shows address
const getBookInfo =
  'SELECT isbn, author, original_publication_year, title, image_url, average_rating, ' +
  'genre.name, publisher.id, publisher.name FROM book, genre, publisher' +
  'WHERE book.genre = genre.genre_id AND book.publisher = publisher.publisher_id and book.book_id = ?';
//the next two queries could be combined with the one above for absolute book info
const getBookPrice =
  'SELECT price.amount_hard, price.amount_soft, price.rental rate FROM price' +
  'WHERE price.book_id = ?';
//this can be used to get the inventory count for validation of order feasability
const getBookInventory = 'SELECT COUNT(*) FROM inventory WHERE isRented = 0 GROUP BY isHardCover';
const getIsOnWishList = 'SELECT COUNT(*) FROM wish_list WHERE book_id = ? AND customer_id =?';
const addToWishList = 'INSERT INTO wish_list(customer_id, book_id) VALUES (?, ?)';
const removeFromWishList = 'DELETE FROM wish_list WHERE customer_id = ? and book_id = ?';

//Login Page
const getLoginInfo = 'SELECT * FROM login WHERE email = ?';

//Create Account Page
const addAddress = 'INSERT INTO address(street, city, zip_code, state) VALUES (?, ?, ?, ?)';
const addCustomer =
  'INSERT INTO customer(first_name, last_name, phone_number, address_id) ' + 'VALUES (?, ?, ?, ?)';
const addLoginInfo = 'INSERT INTO login(email, password, customer_id) VALUES (?, ?, ?)';

app.post('/register', async (req, res) => {
  //const { errors, isValid } = validateRegistrationInputs(req.body);
  // if (!isValid) return res.status(400).json(errors);
  const { firstName, lastName, email, password, address, city, zipcode, state } = req.body;
  try {
    //made column, called rental_credits default 5, doesnt seem like a real feature
    //return res.json({ Msg: 'Success', savedUser });
  } catch (error) {
    res.status(400).json(error);
  }
});

// @route   POST api/auth/login
// @desc    user login / generate JWT
// @access  Public
app.post('/login', async (req, res) => {
  // const { errors, isValid } = validateLoginInputs(req.body);
  // if (!isValid) return res.status(400).json(errors);
  const { email, password } = req.body;
  try {
    // find user in db
    // if email password match, then create below payload
    const payload = {
      // id: user.id,
      // firstName: user.firstName,
      // lastName: user.lastName,
      // avatar: user.avatar,
      // email: user.email
    };
    const token = await jwt.sign(payload, keys.JWT_SECRET, { expiresIn: '24h' });
    return res.json({ Msg: 'Success', token: `Bearer ${token}` });
  } catch (error) {
    return res.status(400).json(error);
  }
});

//View Cart/Place Order Page
//not sure if I should be individually querying per given ISBN but we should
//query with book.book_id = ANY(id array from cart)
//PRICE displayed would be local frontend logic,
//ex 2 hard covers: price = amount_hard * quantity
//ex 2 soft rentals: price = amount_soft * quantity * rental
const getBookLessInfo =
  'SELECT book.title, price.amount_hard, price.amount_soft, price.rental rate' +
  'FROM book, price WHERE book.book_id = price.book_id AND book.book_id = ?';
const getPaymentTypes = 'SELECT currency FROM payment_type';

// mysqlConnection.query(c2, (err, rows, fields)=>{
//     //     if(!err){
//     //     console.log(rows);
//     //     console.log(rows.length)
//     //     }
//     //     else
//     //     console.log(err);
//     // })
