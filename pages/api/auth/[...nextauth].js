import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
import InstagramProvider from "next-auth/providers/instagram"
import User from "db/model/user";
import { compare } from "bcryptjs";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "utils/mongodb";

export default NextAuth({
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
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     authorization: {
        //         params: {
        //             prompt: "consent",
        //             access_type: "offline",
        //             response_type: "code"
        //         }
        //     }
        // }),
        // InstagramProvider({
        //     clientId: process.env.INSTAGRAM_CLIENT_ID,
        //     clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        // })
    ],

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    adapter: MongoDBAdapter(clientPromise),

})
