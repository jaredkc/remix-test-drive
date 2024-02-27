import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import { AppFrame } from './components/AppFrame';
import { CloseIcon } from './components/icons/CloseIcon';
import { commitSession, getSession } from './session.server';
import styles from './styles/app.css';

export const meta: MetaFunction = () => [{
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
}];

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const message = session.get('globalMessage') || null;

  return json(
    { message },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  );
}

export default function App() {
  const { message } = useLoaderData<typeof loader>();
  const [messageActive, setMessageActive] = useState(false);

  useEffect(() => {
    setMessageActive(message ? true : false);
  }, [message]);

  const messageMarkup =
    message && messageActive ? (
      <div className="fixed bottom-0 z-50 max-w-md p-4 -translate-x-1/2 left-1/2">
        <div className="flex items-center gap-4 px-4 py-3 rounded text-slate-100 bg-slate-700">
          {message}
          <button
            onClick={() => setMessageActive(false)}
            className="p-1 rounded-full hover:bg-slate-500"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    ) : null;

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="antialiased bg-white">
        <AppFrame>
          <Outlet />
        </AppFrame>
        {messageMarkup}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
