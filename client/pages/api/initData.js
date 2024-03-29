import connectDB from "db/db"
import User from "db/model/user"

const handler = async (req, res) => {
    await connectDB()
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        const { image, chatList, username, _id } = user
        res.status(200).json({ message: "success", data: { username: username, id: _id, email: user.email, image, chatList } })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "failed" })
    }

}



export default handler