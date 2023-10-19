import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        random: 'random',
      },
    }),
    jwt: async ({ token, user }) => {
      if (user) {
        token.random = 'random'
      }
      return token
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
