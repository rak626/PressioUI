import { LoginFormSchema } from '@/schema/LoginFormSchema'
import { authInstance } from '@/utils/axiosUtil'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        phone: {
          label: 'Phone Number',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // Validate and authenticate the user using your custom logic here
        if (!credentials) {
          throw new Error('No Credentials Provided')
        }
        const validate = LoginFormSchema.safeParse({
          phone: credentials.phone,
          password: credentials.password,
        })

        if (!validate.success) {
          throw new Error('Invalid credentials, give proper credentials')
        }

        // Call the external API to validate the credentials
        try {
          const response = await authInstance.post('/authentication/signIn', {
            userPhoneNo: credentials.phone,
            password: credentials.password,
          })
          const user = response.data
          console.log('user: ', user)
          if (!user) {
            throw new Error('Invalid credentials')
          }
          return user
        } catch (error) {
          throw new Error('Invalid credentials')
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token }) => ({ ...session, ...token }),
    jwt: ({ token, user }) => ({ ...token, ...user }),
  },
  pages: {
    signIn: '/login',
  },
}
