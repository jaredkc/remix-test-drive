import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { auth } from '~/session.server';

export const action = async ({ request }: ActionArgs) => {
  await auth.logout(request, { redirectTo: '/login' });
};

export const loader = async ({ request }: LoaderArgs) => {
  const user = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  console.log(request.headers.get('Cookie'));

  return json(user);
};

export default function Screen() {
  const user = useLoaderData<typeof loader>();
  return (
    <>
      <h1 className="text-xl font-bold">Hello {user.email}!</h1>

      <p className="my-4">
        User type: <code>{user.type}</code>
        <br /> ID: <code>{user.id}</code>
      </p>

      <Form method="post">
        <button className="px-4 py-2 text-sm border border-gray-500 rounded">
          Log Out
        </button>
      </Form>
    </>
  );
}
