import { createUser, fetchUser } from "@/app/lib/actions";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, user }) {
      const localuser = await fetchUser(user?.email);
      if (session.user) {
        session.user.id = localuser?.id ?? "";
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // Create the Use in our DB If a new user signs in
      await createUser(user);
      return true;
    }
  },
});

export { handler as GET, handler as POST };
