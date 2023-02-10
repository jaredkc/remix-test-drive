import { createCookieSessionStorage } from '@remix-run/node';
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: ['s3cret'], // This should be an env variable
    secure: process.env.NODE_ENV === 'production',
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;

type UserSession = {
  email: string;
  id: string;
  type: 'user' | 'admin';
};

export const auth = new Authenticator<UserSession>(sessionStorage);

auth.use(
  new FormStrategy<UserSession>(async ({ form }) => {
    const email = form.get('email');
    const password = form.get('password');

    // replace the code below with your own authentication logic
    if (!email) throw new AuthorizationError('Email is required');
    if (!password) throw new AuthorizationError('Password is required');
    if (password !== 'test') {
      throw new AuthorizationError('Invalid credentials');
    }

    // return email as string;
    return {
      email,
      id: '1',
      type: 'user',
    } as UserSession;
  })
);
