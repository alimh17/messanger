import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github"
import InstagramProvider from "next-auth/providers/instagram"
import { compare } from "bcryptjs";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import User from "db/model/user";
import clientPromise from "utils/mongodb";
import connectDB from "db/db";

export default NextAuth({
    providers: [
        CredentialsProvider({

            async authorize(credentials, req) {
                await connectDB()
                const { username } = credentials
                const user = await User.findOne({ username })
                if (!user) {
                    throw new Error("اطلاعات وارد شده صحیح نمی باشد")
                }

                // //* check password
                const validPass = await compare(credentials.password, user.password)

                if (!validPass) {
                    throw new Error("اطلاعات وارد شده صحیح نمی باشد")
                }

                return { email: user.email, image: user.image }
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
