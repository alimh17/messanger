import User from "db/model/user"

const handler = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    res.status(200).json({ message: "success", data: { email: user.email, image: user.image } })

}



export default handler