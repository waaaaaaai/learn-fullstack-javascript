import './config';

// import https from 'https';

// https.get('https://www.lynda.com',res =>{
//     console.log('hhstatus code:',res.statusCode);
    

// res.on('data',chunk => {
//     console.log(chunk.toString());
// });
// });

import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request',(req,res)=> { # writtable stream
    res.write('Hello! \n');
});