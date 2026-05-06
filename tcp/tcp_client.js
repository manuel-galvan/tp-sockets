const net = require("net")

const client = net.createConnection({ port: 8080 }, () => {
    console.log("Conectado al servidor TCP")
});

client.on("data", (data) => {
    console.log(`Mensaje del servidor:  ${data.toString()}`);
    client.end();
});