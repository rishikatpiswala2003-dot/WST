/*10. Design a college web site using JavaScript, NodeJS.*/


const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <html>
        <head>
            <title>College Website</title>
        </head>
        <body>
            <h1>Welcome to ABC College</h1>
            <p>This is a simple college website using Node.js</p>
            <script>
                alert("Welcome to College Website");
            </script>
        </body>
        </html>
    `);
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});