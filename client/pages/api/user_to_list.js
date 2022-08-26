import _ from 'lodash'
import connectDB from "db/db"
import User from "db/model/user"


const handler = async (req, res) => {
    await connectDB()
    const { data } = req.body
    if (req.method === "POST") {
        try {
            const email = data.me.email
            const user = await User.findOne({ email })
            user.chatList.push(data.to)
            user.chatList = _.uniqBy(user.chatList, data.to);
            console.log(user)
            await user.save()
            res.status(200).json({ message: "success", data: user.chatList })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "failed" })
        }
    } else if (req.method === "GET") {
        res.status(200).json({ message: "success" })
    }

}




export default handler