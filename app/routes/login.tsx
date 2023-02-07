import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { auth, sessionStorage } from '~/session.server';
import { Alert } from '~/components/Alert';

export const action = async ({ request }: ActionArgs) => {
  await auth.authenticate('form', request, {
    successRedirect: '/private',
    failureRedirect: '/login',
  });
};

type LoaderError = { message: string } | null;

export const loader = async ({ request }: LoaderArgs) => {
  await auth.isAuthenticated(request, { successRedirect: '/private' });
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );
  const error = session.get(auth.sessionErrorKey) as LoaderError;
  return json({ error });
};

export default function Screen() {
  const { error } = useLoaderData<typeof loader>();

  return (
    <Form method="post">
      {error ? <Alert title={error.message} /> : null}

      <div className="my-4">
        <label htmlFor="email" className="block text-xs">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="user@example.com"
          className="p-2 border rounded"
        />
      </div>
      <div className="my-4">
        <label htmlFor="password" className="block text-xs">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="test"
          className="p-2 border rounded"
        />
      </div>

      <button className="px-8 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Log In
      </button>
    </Form>
  );
}
