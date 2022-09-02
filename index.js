const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let content = '';
    switch (req.method) {
        case 'GET':


            if (req.url === '/') {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, data) => {
                    if (err) {
                        throw new Error(err);
                    }

                    res.end(data);
                });
            }

            if (req.url === '/api/users') {
                res.writeHead(200, {
                    'Content-Type': 'text/json'
                });
                const users = [
                    {
                        name: 'Masha',
                        age: 23
                    },
                    {
                        name: 'Mike',
                        age: 31
                    }
                ]
                res.end(JSON.stringify(users));
            }

            // content


            break;
        case 'POST':
            const body = [];

            req.on('data', data => {
                body.push(Buffer.from(data).toString());
            });

            req.on('end', () => {
                const message = body.toString();

                res.end(`<h1>Message: ${message}</h1>`);
            });


            break;
    }
});


server.listen(3000, () => {
    console.log('Server is running...');
});