import User from "db/model/user"

const handler = async (req, res) => {
    const { email } = req.body
    if (req.method === "POST") {
        try {
            const user = await User.findOne({ email })
            res.status(200).json({ message: "success", data: { email: user.email, image: user.image } })
        } catch (err) {
            res.status(500).json({ message: "Failed , try again later" })
        }
    }

}



export default handler