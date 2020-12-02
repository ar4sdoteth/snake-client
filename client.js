//IP: 192.168.1.67 || "localhost" PORT: 50541
const net = require('net');

//establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //intepret incoming data as text
  conn.setEncoding('utf8');

  //add event handler for a successful connection
  conn.on('data', (data) => {
    console.log(`Server says: `, data);
  })

  //connect event triggers
  conn.on('connect', () => {
    //writes my name to the server 
    conn.write('Name: ASH');
    //client side message confirming the connection
    console.log(`Ash has connected `);
    //send a move up signal to the server

    // reference code to test if we can send multiple moves via conn.write() 
    // conn.write(`Move: up`);
    // setInterval(() => {
    //   conn.write(`Move: up`)
    // }, 1000);
    // ^^ Works!
   
  });
  
  return conn;
}

// connect();

module.exports = { connect };