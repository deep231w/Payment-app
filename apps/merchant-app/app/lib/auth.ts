import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin', // Optional custom sign-in page
    },
    callbacks: {
        async session({ session, token, user }) {
            // Customize the session object
            return session;
        },
    },

};
console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
