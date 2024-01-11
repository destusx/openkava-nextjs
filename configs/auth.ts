import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { baseBackendUrl } from '@/utils/constans';

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId:
                '941147541222-mi3lg092sc1mq3ijc2g8ptqhnhrbggvh.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials, req) {
                const res = await fetch(`${baseBackendUrl}/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' },
                });
                const user = await res.json();

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user as User;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
    callbacks: {
        async redirect({ baseUrl }) {
            return baseUrl;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.token = user.token;
                token.role = user.role;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.user.token = token.token;
                session.user.role = token.role;
            }

            return session;
        },
    },
};
