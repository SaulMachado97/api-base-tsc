import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { router } from './routes';
import dbConnect from "./config/mongo";
import sequelize from "./config/mysql";
import { Server } from "socket.io";
import { createServer } from "http";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const httpServer = createServer(app);
const io = new Server(httpServer);

//Server Socket.io
io.on("connection", (socket) => {

    socket.on('disconnect', function () {
        console.log('socket disconnected : ' + socket.id)
    });

    socket.emit('message', 'Hola ' + socket.id)

    io.emit(
        'message',
        'Mensaje para todos, se conecto un nuevo socket ' + socket.id
    );

    socket.broadcast.emit("estructuras", "hola a todos soy el socket " + socket.id);

    setInterval(() => {
        io.emit('random', Math.floor(Math.random() * 100))
    }, 3000)

});

//Conection to database mongo
dbConnect().then(() => console.log("Conection Mongo succesfull!"));

//Conection to MySQL
sequelize.authenticate().then( () => { console.log("Conextion MySQL successfull!")});

httpServer.listen(PORT, () => console.log(`API Corriendo por el puerto ${PORT}`));