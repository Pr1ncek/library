const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('./config/keys');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

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

// Passport Configuration
const configurePassport = require('./config/passport');
configurePassport(passport, mysqlConnection);

app.listen(5000, () => console.log('Express server is running...'));

const c1 =
  'SELECT title FROM book INNER JOIN genre ON book.genre_id=genre.genre_id GROUP BY genre.genre_id';
const c2 = 'SELECT * from genre';
const c3 = 'SELECT * from book, genre WHERE book.genre_id=genre.genre_id AND name ';

// Get info about individual book
app.get('/books/individual/:isbn', (req, res) => {
  const singleBookInfo = 'SELECT * FROM book WHERE book.isbn=' + req.params.isbn;
  mysqlConnection.query(singleBookInfo, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// ------------------------------------------ BOOK ROUTES ----------------------------------------------------------
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
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

const searchBooks =
  'SELECT * FROM ((book INNER JOIN writes ON book.isbn = writes.ISBN)  INNER JOIN author ON writes.author_id = author.author_id) WHERE (full_name LIKE ?) OR (title LIKE ?) OR (book.ISBN LIKE ?) ORDER BY average_rating DESC LIMIT 25;';
// Get top 25 *other* undefined genre books from DB
app.post('/api/books/search', (req, res) => {
  const { searchTerm } = req.body;
  let newSearchTerm = '%' + searchTerm + '%';
  mysqlConnection.query(
    searchBooks,
    [newSearchTerm, newSearchTerm, newSearchTerm],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
        res.status(400).json(err);
      }
    }
  );
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
const createUser = 'INSERT INTO user(first_name, last_name, email, login_pw) VALUES (?, ?, ?, ?)';

app.post('/api/auth/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  mysqlConnection.query(createUser, [firstName, lastName, email, password], (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

const getUserByEmail = 'SELECT * FROM user WHERE email = ?';

// @route   POST api/auth/login
// @desc    user login / generate JWT
// @access  Public
app.post('/api/auth/login', async (req, response) => {
  const { email, password } = req.body;
  try {
    // if email password match, then create below payload
    mysqlConnection.query(getUserByEmail, email, async function(err, res, fields) {
      if (password == res[0].login_pw) {
        const payload = {
          id: res[0].user_id,
          firstName: res[0].first_name,
          lastName: res[0].last_name,
          email: res[0].email
        };
        const token = await jwt.sign(payload, keys.JWT_SECRET, { expiresIn: '24h' });
        response.json({ Msg: 'Success', token: `Bearer ${token}` });
      } else {
        console.log(err);
        response.status(400).json(err);
      }
    });
  } catch (error) {
    return response.status(400).json(error);
  }
});

const addBorrow =
  'INSERT INTO borrow(user_id, ISBN, date_checked_out, date_due) VALUES (?, ?, ?, ?)';
const getUserByID = 'SELECT * FROM user WHERE user_id = ?';
const updateCredits = 'UPDATE user SET rental_credits = ? WHERE user_id = ?';
const getCurrBorrowed = 'SELECT * FROM book, borrow WHERE user_id = ? AND book.ISBN = borrow.ISBN';

app.post(
  '/api/useractions/borrow',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isbn } = req.body;
    const userId = req.user.user_id;
    var credits = 0;
    var currDate = new Date();
    var dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);
    try {
      mysqlConnection.query(getUserByID, userId, (err, rows, fields) => {
        if (!err) {
          credits = rows[0].rental_credits;
          if (credits > 0) {
            credits = credits - 1;
            mysqlConnection.query(
              addBorrow,
              [userId, isbn, currDate, dueDate],
              (err, rows, fields) => {
                if (!err) {
                  mysqlConnection.query(updateCredits, [credits, userId], (err, rows, fields) => {
                    if (!err) {
                      mysqlConnection.query(getCurrBorrowed, userId, (err, rows, fields) => {
                        if (!err) {
                          res.status(200).json(rows);
                        } else {
                          console.log(err);
                          res.status(400).json(err);
                        }
                      });
                    } else {
                      console.log(err);
                      res.status(400).json(err);
                    }
                  });
                } else {
                  console.log(err);
                  res.status(400).json(err);
                }
              }
            );
          }
        } else {
          console.log(err);
          res.status(400).json(err);
        }
      });
      console.log(credits);
    } catch (error) {
      console.error(error);
    }
    // add checkout date
    // add due date 2 weeks from now
    // save book and userId under renters table
    // update user credits in user table
    // send back list of books checked out by current user
  }
);

const removeRental = 'DELETE FROM borrow WHERE user_id = ? AND ISBN = ?';

app.post(
  '/api/useractions/return',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isbn } = req.body;
    const userId = req.user.user_id;
    // remove book from renters table
    // update user credits in user table
    var credits = 0;
    try {
      mysqlConnection.query(getUserByID, userId, (err, rows, fields) => {
        if (!err) {
          credits = rows[0].rental_credits;
          if (credits >= 0) {
            credits = credits + 1;
            mysqlConnection.query(removeRental, [userId, isbn], (err, rows, fields) => {
              if (!err) {
                mysqlConnection.query(updateCredits, [credits, userId], (err, rows, fields) => {
                  if (!err) {
                    mysqlConnection.query(getCurrBorrowed, userId, (err, rows, fields) => {
                      if (!err) {
                        res.status(200).json(rows);
                      } else {
                        console.log(err);
                        res.status(400).json(err);
                      }
                    });
                  } else {
                    console.log(err);
                    res.status(400).json(err);
                  }
                });
              } else {
                console.log(err);
                res.status(400).json(err);
              }
            });
          }
        } else {
          console.log(err);
          res.status(400).json(err);
        }
      });
      console.log(credits);
    } catch (error) {
      console.error(error);
    }
    // send back list of books still checked out by current user
  }
);

app.get('/api/userinfo/books', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { user_id } = req.user;

  mysqlConnection.query(getCurrBorrowed, user_id, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

app.get('/api/userinfo/credits', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { user_id } = req.user;
  // send back the number of credits this user has
  try {
    mysqlConnection.query(getUserByID, user_id, (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      } else {
        console.log(err);
        res.status(400).json(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

const addToCart = 'INSERT INTO cart(user_id, ISBN) VALUES (?, ?)';
const getCartByUser = 'SELECT * FROM cart WHERE user_id = ?';

app.post('/api/useractions/cart', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { isbn } = req.body;
  const userId = req.user.user_id;
  // save record to cart table
  // send back the new cart
  try {
    mysqlConnection.query(addToCart, [userId, isbn], (err, rows, fields) => {
      if (!err) {
        mysqlConnection.query(getCartByUser, userId, (err, rows, fields) => {
          if (!err) {
            res.status(200).json(rows);
          } else {
            console.log(err);
            res.status(400).json(err);
          }
        });
      } else {
        console.log(err);
        res.status(400).json(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

const removeFromCart = 'DELETE FROM cart WHERE user_id = ? AND ISBN = ?';

app.post(
  '/api/useractions/cart/remove',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isbn } = req.body;
    const userId = req.user.user_id;
    // remove book from cart table
    // send back the new cart
    try {
      mysqlConnection.query(removeFromCart, [userId, isbn], (err, rows, fields) => {
        if (!err) {
          mysqlConnection.query(getCartByUser, userId, (err, rows, fields) => {
            if (!err) {
              res.status(200).json(rows);
            } else {
              console.log(err);
              res.status(400).json(err);
            }
          });
        } else {
          console.log(err);
          res.status(400).json(err);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
);

app.get('/api/userinfo/cart', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { user_id } = req.user;
  // send back all books in user cart
  mysqlConnection.query(getCartByUser, user_id, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
      res.status(400).json(err);
    }
  });
});

// ------------------------ Not sure if we need this -----------------------------
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
