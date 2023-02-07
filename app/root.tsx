import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="flex items-center justify-between gap-4 px-8 text-sm bg-gray-800 h-14">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="text-gray-300">
              Home
            </NavLink>
            <NavLink to="subscribe" className="text-gray-300">
              Subscribe
            </NavLink>
            <NavLink to="private" className="text-gray-300">
              Private
            </NavLink>
          </div>
          <NavLink to="login" className="text-gray-300">
            Login
          </NavLink>
        </nav>
        <div className="max-w-xl p-4 mx-auto md:p-8 lg:p-12">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
