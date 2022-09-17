// import _ from "lodash"

// const handler = async (req, res) => {

//     // const [data] = req.body



//     if (req.method === "POST") {
//         const messages = req.body.data
//         messages.map(message => {
//             const concat = `${message.id}--with--${message.to}`
//             let split = concat.split('--with--');
//             let unique = [...new Set(split)].sort((a, b) => (a < b ? -1 : 1));
//             let updatedRoomName = `${unique[0]}--with--${unique[1]}`;
//             console.log(updatedRoomName);
//         })
//     }

// }




// export default handler