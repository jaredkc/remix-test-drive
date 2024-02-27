import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { Alert } from '~/components/Alert';
import { FormSubmit } from '~/components/forms';
import { auth, getSession } from '~/session.server';

type LoaderError = { message: string } | null;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await auth.isAuthenticated(request, { successRedirect: '/private' });
  const session = await getSession(request.headers.get('Cookie'));
  const error = session.get(auth.sessionErrorKey) as LoaderError;
  return json({ error });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await auth.authenticate('form', request, {
    successRedirect: '/private',
    failureRedirect: '/login',
  });
};

export default function Screen() {
  const { error } = useLoaderData<typeof loader>();

  return (
    <Form method="post">
      {error ? <Alert title={error.message} type="error" /> : null}

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

      <FormSubmit label="Log In" />
    </Form>
  );
}
