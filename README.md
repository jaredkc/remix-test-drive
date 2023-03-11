# Remix Test Drive

A handle full of [Remix](https://remix.run/docs) resources and examples for cut-and-paste reference.

## Build with

- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Remix-Auth](https://github.com/sergiodxa/remix-auth)
- [Remix Validated Form](https://github.com/sergiodxa/remix-auth-form)

## Examples provided

- [Action](https://remix.run/docs/en/v1/hooks/use-action-data) template with [ErrorBoundary](https://remix.run/docs/en/1.14.1/route/error-boundary).
- [Loader](https://remix.run/docs/en/main/route/loader) template fetching data server side.
- Session example with [Remix-Auth](https://github.com/sergiodxa/remix-auth).
  - Login template and protected route with `isAuthenticated`.
- Remix [Form](https://remix.run/docs/en/main/components/form) examples
  - Remix-friendly form components, most of which do not require `useState`.
- [Remix Validated Form](https://github.com/sergiodxa/remix-auth-form) example.
  - Includes validated form components and validation with Zod.
- Global toast messages via [session flash](https://remix.run/docs/en/v1/utils/sessions#sessionflashkey-value).
- Example API routes returning JSON.
- AppFrame component using:
  - Active navigation link with [NavLink](https://remix.run/docs/en/1.14.1/components/nav-link)
  - Loading indicator when navigating with [useTransition](https://remix.run/docs/en/1.14.1/hooks/use-transition)
  - Close the mobile menu after navigation with [useLocation](https://remix.run/docs/en/1.14.1/other-api/react-router).
  - Simple responsive layout

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/remix&template=remix)

_Live Example: https://remix-run-template.vercel.app_

You can also deploy using the [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!
