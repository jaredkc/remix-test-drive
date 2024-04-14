import { NavLink, useLocation, useNavigation } from '@remix-run/react';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

export function AppFrame({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
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

      {navigation.state !== 'idle' && <Loading />}
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

const navigation = [
  { title: 'Introduction', to: '/' },
  { title: 'Loader', to: '/template/loader' },
  { title: 'Action', to: '/template/action' },
  { title: 'Conform', to: '/template/conform' },
  { title: 'Private', to: '/private' },
  { title: 'Login', to: '/login' },
  { title: 'Components', to: '/components' },
];

function AppNavigation(props: HTMLAttributes<HTMLElement>) {
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

function Loading() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0.2);
    const timer1 = setTimeout(() => setWidth(0.4), 500);
    const timer2 = setTimeout(() => setWidth(0.6), 1000);
    const timer3 = setTimeout(() => setWidth(0.8), 3000);
    const timer4 = setTimeout(() => setWidth(0.9), 6000);
    const timer5 = setTimeout(() => setWidth(0.99), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-0.5 origin-left transition duration-300 bg-gradient-to-r from-cyan-400 to-indigo-400"
      style={{ transform: `scaleX(${width})` }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
