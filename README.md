# Remix Test Drive

As I continue to dive in and learn [Remix](https://remix.run/docs), I'll be adding more examples here. These examples are intended to be quick cut-and-paste starter resources when working with Remix.

Examples included so far:

- [Action](https://remix.run/docs/en/v1/hooks/use-action-data) template with [ErrorBoundary](https://remix.run/docs/en/1.14.1/route/error-boundary).
- [Loader] template fetching data server side.
- Login example with [Remix-Auth](https://github.com/sergiodxa/remix-auth).
- Form template and validation with [Remix Validated Form](https://github.com/sergiodxa/remix-auth-form).
- Global toast messages via [session flash](https://remix.run/docs/en/v1/utils/sessions#sessionflashkey-value).
- Remix friendly form components, most of which do not require `useState`.
- Example API routes returning JSON.
- AppFrame component
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
