import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Code } from '~/components/Code';

export const meta: MetaFunction = () => [{ title: 'Loader template' }];

//
// server-side
//
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return json({
    message: 'Users data provided by jsonplaceholder.typicode.com',
    data: await response.json(),
  });
};

//
// client-side
//
export default function LoaderTemplate() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <p>
        Example loader template. The data is fetched server side from
        jsonplaceholder.typicode.com
      </p>
      <Code content={loaderData} />
    </div>
  );
}
