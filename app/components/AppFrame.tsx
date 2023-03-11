import { NavLink, useLocation, useTransition } from '@remix-run/react';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

export function AppFrame({ children }: { children: React.ReactNode }) {
  const transition = useTransition();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  let ToggleIcon = isOpen ? XIcon : MenuIcon;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={clsx('app-frame', isOpen && 'app-frame--nav-open')}>
      <header className="app-frame__header">
        <div className="app-frame__logo">
          <b className="font-bold">Remix Test Drive</b>
        </div>
        <button
          className="app-frame__nav-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ToggleIcon className="w-3" />
        </button>
        <AppNavigation className="app-frame__nav" />
      </header>
      <main className="app-frame__content">
        <article className="mx-auto prose">{children}</article>
      </main>
      {transition.state !== 'idle' && (
        <div className="absolute top-0 px-6 py-2 text-sm -translate-x-1/2 rounded-b bg-slate-800 text-slate-200 left-1/2">
          Loading...
        </div>
      )}
    </div>
  );
}

function MenuIcon(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  );
}

function XIcon(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  );
}

export const navigation = [
  { title: 'Introduction', to: '/' },
  { title: 'Loader', to: '/loader-template' },
  { title: 'Action', to: '/action-template' },
  { title: 'Validated Form', to: '/validated-form' },
  { title: 'Private', to: '/private' },
  { title: 'Login', to: '/login' },
];

export function AppNavigation(props: HTMLAttributes<HTMLElement>) {
  return (
    <nav {...props}>
      <ul>
        {navigation.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
