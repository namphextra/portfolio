import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

console.log(111, process.env.GOOGLE_ID);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
};

export default NextAuth(authOptions);
