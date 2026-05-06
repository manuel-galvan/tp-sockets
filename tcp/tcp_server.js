const net = require("net")

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

// try {
//     server.listen(8080, () => {
//         console.log("Servidor TCP escuchando en el puerto 8080");
//     });
// } catch (error) {
//     console.log(`Error al iniciar el servidor TCP: ${error.message}`);
// }
