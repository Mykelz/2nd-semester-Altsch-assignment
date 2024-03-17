const http = require('http');

const reqListener = (req, res, next)=>{

    if (req.method == 'GET' && req.url =='/books'){
        res.write('This is the GET method for the /books url');
        res.end();
    }
    if (req.method == 'POST' && req.url =='/books'){
        res.write('This is the POST method for the /books url');
        res.end();
    }
    if (req.method == 'PUT' && req.url =='/books'){
        res.write('This is the PUT method for the /books url');
        res.end();
    }
    if (req.method == 'DELETE' && req.url =='/books'){
        res.write('This is the DELLETE method for the /books url');
        res.end();
    }
}

const server = http.createServer(reqListener);


server.listen(6000, ()=>{
    console.log('server is listening on port 6000')
})