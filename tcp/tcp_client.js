const net = require("net")
const servidor = 8090;
const readLine = require("node:readline/promises")

async function ask() {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let salir = false;
    while (!salir) {
        const answer = await rl.question("Ingrese un mensaje para el servidor TCP: ");
        console.log("\n");
        if (answer.toLowerCase() === "salir") {
            salir = true;
            console.log("au revoir!!!!");
        } else {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            console.log(`Enviando mensaje: ${answer} \n`);
            client.write(answer);
            console.log('\n');
        }
    }
    rl.close();
    client.end();
}

const client = net.createConnection({ port: servidor }, () => {
    console.log("Conectado al servidor TCP \n");
});

client.on("data", (data) => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    console.log(`Mensaje del servidor:  ${data.toString()} \n`);
    process.stdout.write("Ingrese un mensaje para el servidor TCP: ");
});

client.on("end", () => {
    console.log("Desconectado del servidor TCP");
});

ask();