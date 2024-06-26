# Remix Test Drive

A handle full of [Remix](https://remix.run/docs) resources and examples for cut-and-paste reference.

## Build with

- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Remix-Auth](https://github.com/sergiodxa/remix-auth)

## Examples provided

- [Action](https://remix.run/docs/en/v1/hooks/use-action-data) template with [ErrorBoundary](https://remix.run/docs/en/1.14.1/route/error-boundary).
- [Loader](https://remix.run/docs/en/main/route/loader) template fetching data server side.
- Session example with [Remix-Auth](https://github.com/sergiodxa/remix-auth).
  - Login template and protected route with `isAuthenticated`.
- Remix [Form](https://remix.run/docs/en/main/components/form) examples
  - Remix-friendly form components, most of which do not require `useState`.
- Global toast messages via [session flash](https://remix.run/docs/en/v1/utils/sessions#sessionflashkey-value).
- Example API routes returning JSON.
- AppFrame component using:
  - Active navigation link with [NavLink](https://remix.run/docs/en/1.14.1/components/nav-link)
  - Loading indicator when navigating with [useNavigation](https://remix.run/docs/en/1.14.1/hooks/use-transition)
  - Close the mobile menu after navigation with [useLocation](https://remix.run/docs/en/1.14.1/other-api/react-router).
  - Simple responsive layout

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```**sh**
pnpm install
```

Afterwards, start the Remix development server like so:

```sh
pnpm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Upgrading Remix

A CLI utility to update/list all of your Remix dependencies together.

```sh
npx upgrade-remix
```
