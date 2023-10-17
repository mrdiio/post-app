import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'

const prisma = db

export const options = {
  session: {
    strategy: 'jwt',
  }, 
  adapter: PrismaAdapter(prisma),
  pages: {
    // signIn: '/auth/signin',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'J Smith', password: '123123' }

        if (
          credentials.username === user.name &&
          credentials.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}
