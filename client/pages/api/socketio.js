// import { Server } from 'socket.io';

// const ioHandler = (req, res) => {

//     const io = new Server("http://localhost:3001")
//     console.log(io)
//     io.on("connection", socket => {
//         console.log(socket)
//     })
//     // if (!res.socket.server.io) {
//     //     console.log('*First use, starting socket.io');
//     //     console.log(res.socket);
//     //     const io = new Server(res.socket.server);

//     //     io.on('connection', socket => {
//     //         console.log('Connected socket.io');
//     //         socket.broadcast.emit('a user connected');
//     //         socket.on('hello', msg => {
//     //             socket.emit('hello', 'world!');
//     //         });
//     //     });

//     //     res.socket.server.io = io;
//     // } else {
//     //     console.log('socket.io already running');
//     // }
//     // res.end();
// }

// export const config = {
//     api: {
//         bodyParser: false
//     }
// };


// export default ioHandler