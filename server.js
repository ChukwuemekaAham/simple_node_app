// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//   while(true) {
//     console.log('Containers rule!');
//     await sleep(5000);
//   }
// }

// main();

const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  res.end("Status: OK\nContainers rule!");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
