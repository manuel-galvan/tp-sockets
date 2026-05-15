const net = require("net")

const servidor = 8090;

const server = net.createServer((socket) => {
    console.log("Cliente conectado");
    try {
        socket.on("data", (data) => {
            console.log(`Recibido: ${data.toString()}`);
            socket.write("mensaje recibido por TCP")
        });
    } catch (error) {
        console.error(`Error en el servidor TCP: ${error.message}`);
    }
}
);

process.on("uncaughtException", (error) => {
    console.error(`Error no capturado en el servidor TCP: ${error.message}`);
});

server.listen(servidor, () => { console.log(`Servidor TCP escuchando en el puerto ${servidor}`) });
