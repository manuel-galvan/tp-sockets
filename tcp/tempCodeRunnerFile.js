try {
    server.listen(8080, () => {
        console.log("Servidor TCP escuchando en el puerto 8080");
    });
} catch (error) {
    console.log(`Error al iniciar el servidor TCP: ${error.message}`);
}
