import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "db/model/user";
import { compare } from "bcryptjs";


export default NextAuth({
    sesstion: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const user = await User.findOne({ username: credentials.username })
                if (!user) {
                    throw new Error("اطلاعات وارد شده صحیح نمی باشد")
                }

                //* check password
                const validPass = await compare(credentials.password, user.password)

                if (!validPass) {
                    throw new Error("اطلاعات وارد شده صحیح نمی باشد")
                }

                return { username: user.username }

            }
        })
    ]
})
