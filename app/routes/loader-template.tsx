import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Alert } from '~/components/Alert';
import { Code } from '~/components/Code';

const pageTitle = 'Action boilerplate';
export const meta: MetaFunction = () => {
  return { title: pageTitle };
};

//
// server-side
//
export const loader = async ({ request }: LoaderArgs) => {
  const randomBool = Math.random() >= 0.5;
  return json({
    data: 'Hello from the server',
    error: randomBool ? 'Random error from the server' : null,
  });
};

//
// client-side
//
export default function ActionBoilerplate() {
  const { data, error } = useLoaderData<typeof loader>();

  return (
    <div>
      <p className="mb-4">
        This is a starter template for handling data loading from mbFetch.
      </p>
      {error && <Alert title={error} type="error" />}
      <h2 className="mt-8 mb-2 text-lg font-semibold">
        Data loaded server side:
      </h2>
      <Code content={data} />
    </div>
  );
}
