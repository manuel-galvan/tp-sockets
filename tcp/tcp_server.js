const net = require("net")

const server = net.createServer((socket) => {
    console.log("Cliente conectado");
    socket.on("data", (data) => {
        console.log(`Recibido: ${data.toString()}`);
        socket.write("mensaje recibido por TCP")
    });
});

server.listen(8080, () => {
    console.log("Servidor TCP escuchando en el puerto 8080");
});