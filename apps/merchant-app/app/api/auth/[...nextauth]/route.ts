import NextAuth from "next-auth";
import { authOptions } from "../../../lib/auth";  // Adjust this to the actual relative path

export const POST = NextAuth(authOptions);
