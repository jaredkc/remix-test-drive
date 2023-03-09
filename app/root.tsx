import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import { AppFrame } from './components/AppFrame';
import { commitSession, getSession } from './session.server';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const message = session.get('globalMessage') || null;

  return json(
    { message },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  );
}

export default function App() {
  const { message } = useLoaderData<typeof loader>();

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
        {message && (
          <div className="fixed bottom-0 max-w-md p-4 -translate-x-1/2 left-1/2 z-50">
            <div className="px-4 py-2 rounded text-slate-100 bg-slate-700">
              {message}
            </div>
          </div>
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
