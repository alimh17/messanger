import connectDB from "db/db"
import User from 'db/model/user'
import { hash } from 'bcryptjs'


const handler = async (req, res) => {
    await connectDB()

    const method = req.method
    const { username, email, password } = req.body

    if (method === "POST") {
        try {

            //* -------------------hash password ------------------
            const hashPass = await hash(password, 10)

            //* ------------------ dublicate user -------------------
            const foundUsername = await User.findOne({ username })
            const foundEmail = await User.findOne({ email })

            if (foundUsername || foundEmail) {
                return res.status(500).json({ message: "کاربری با این مشخصات وجود دارد" })
            }

            //* ------------------ create User ----------------------------
            const user = new User({
                username,
                email,
                password: hashPass
            })
            await user.save()
            return res.status(201).json({ message: "succefuly!!!" })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: "failed!", err })
        }
    }


}




export default handler
