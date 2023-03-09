import { NavLink } from '@remix-run/react';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { useState } from 'react';

export function AppFrame({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  let ToggleIcon = isOpen ? XIcon : MenuIcon;

  return (
    <div className="lg:ml-72 xl:ml-80">
      <header className="relative lg:fixed lg:inset-0 lg:z-10 lg:flex">
        <div className="px-4 overflow-y-scroll border-b lg:w-72 border-zinc-200 lg:border-r lg:border-zinc-200 xl:w-80">
          <div className="flex items-center h-12 gap-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              <ToggleIcon className="w-3 stroke-zinc-900" />
            </button>
            <div>Remix Test Drive</div>
          </div>
          <AppNavigation
            className={clsx(
              isOpen
                ? 'bg-white z-10 lg:my-6 lg:block'
                : 'hidden lg:my-6 lg:block'
            )}
          />
        </div>
      </header>
      <div className="relative px-4 py-12 sm:px-6 lg:px-8 lg:z-20">
        <main>
          <article className="mx-auto prose">{children}</article>
        </main>
      </div>
    </div>
  );
}

function MenuIcon(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
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
            <NavLink
              to={item.to}
              className="block my-3 text-sm transition text-zinc-600 hover:text-zinc-900 "
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
