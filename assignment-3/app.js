const http = require("http");
const { findUser } = require('./db.function.js')

// function getBodyFromStream(req) {
//   return new Promise((resolve, reject) => {
//     const data = [];
//     req.on("data", (chunk) => {
//       data.push(chunk);
//     });
//     req.on("end", () => {
//       const body = Buffer.concat(data).toString();
//       if (body) {
//         // assuming that the body is a json object
//         resolve(JSON.parse(body));
//         return;
//       }
//       resolve({});
//     });

//     req.on("error", (err) => {
//       reject(err);
//     });
//   });
// }

function authenticate(req, res, next) {
  const { username, password } = req.headers;
  const user = findUser(username);
  if (!user) {
    res.statusCode = 401;
    res.end();
    return;
  }
  if (user.username !== username || user.password !== password) {
    res.statusCode = 401;
    res.end();
    return;
  }
  next(req, res);
}

function getBooks(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ books: [{ name: "Harry Potter" }] }));
}

function getAuthors(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ authors: [{ name: "J.K. Rowling" }] }));
}

const server = http.createServer(async (req, res) => {
  // getBodyFromStream(req, res, getBooks);
  try {
    // const body = await getBodyFromStream(req);
    // req.body = body;
    if (req.method === 'GET' && req.url === "/books") {
      authenticate(req, res, getBooks);
    }
    if (req.method === 'POST' && req.url === "/books") {
        authenticate(req, res, ()=>{
            res.end('This is the POST /books endpoint')
        });
    }
    if (req.method === 'PUT' && req.url === "/books") {
        authenticate(req, res, ()=>{
            res.end('This is the PUT /books endpoint')
        });
    }
    if (req.method === 'PATCH' && req.url === "/books") {
        authenticate(req, res, ()=>{
            res.end('This is the PATCH /books endpoint')
        });
    }
    if (req.method === 'DELETE' && req.url === "/books") {
        authenticate(req, res, ()=>{
            res.end('This is the DELETE /books endpoint')
        });
    }


    //Authors endPoints
    if (req.method === 'GET' && req.url === "/authors") {
      authenticate(req, res, getAuthors);
    }
    if (req.method === 'POST' && req.url === "/authors") {
        authenticate(req, res, ()=>{
            res.end('This the POST /authors endpoint')
        });
    }
    if (req.method === 'PUT' && req.url === "/authors") {
        authenticate(req, res, ()=>{
            res.end('This the PuT /authors endpoint')
        });
    }
    if (req.method === 'PATCH' && req.url === "/authors") {
        authenticate(req, res, ()=>{
            res.end('This the PATCH /authors endpoint')
        });
    }
    if (req.method === 'DELETE' && req.url === "/authors") {
        authenticate(req, res, ()=>{
            res.end('This the DELETE /authors endpoint')
        });
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});