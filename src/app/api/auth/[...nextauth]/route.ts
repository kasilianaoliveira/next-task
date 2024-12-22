import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.JWT_SECRET as string,
});

export { authOptions as GET, authOptions as POST };