const http = require('http');


const server = http.createServer( (req, res, next)=>{
    res.write('Obianuka micheal eze');
    res.end();
})


server.listen(8000, ()=>{
    console.log('server is listening on port 8000')
})