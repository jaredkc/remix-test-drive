import { useRouteError, isRouteErrorResponse } from '@remix-run/react';

export function ErrorBanner() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-4 text-red-900 bg-red-100 border border-red-500 rounded md:p-8">
        <h2 className="m-0 text-xl font-bold text-red-900">
          Oh no, something went wrong!
        </h2>
        <p className="mt-2 mb-0">Status: {error.status}</p>
        <p className="mt-2 mb=0">{error.data.message}</p>
      </div>
    );
  }

  let errorMessage = 'Unknown error!';
  if (error instanceof Error) errorMessage = error.message;

  return (
    <div className="p-4 text-red-900 bg-red-100 border border-red-500 rounded md:p-8">
      <h2 className="m-0 text-xl font-bold text-red-900">
        Oh no, something went wrong!
      </h2>
      <p className="mt-2 mb-0">{errorMessage}</p>
    </div>
  );
}
