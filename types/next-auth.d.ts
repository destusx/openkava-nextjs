import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            email: string;
            token: string | undefined;
            role: string;
        };
    }

    interface User {
        id: number;
        email: string;
        createdAt: string;
        updatedAt: string;
        role: string;
        token: string;
    }
}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        token?: string;
        role: string;
    }
}
