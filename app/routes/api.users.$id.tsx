import type { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id && parseInt(params.id) > 10) {
    return new Response('User ID must be between 1 and 10', { status: 404 });
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  const data = {
    message: 'Users data provided by jsonplaceholder.typicode.com',
    data: await response.json(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
