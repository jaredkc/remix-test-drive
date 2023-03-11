import { Code } from './Code';
import { Details } from './Details';

export function ErrorBanner({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-900 bg-red-100 border border-red-500 rounded md:p-8">
      <h2 className="m-0 text-xl font-bold text-red-900">
        Oh no, something went wrong!
      </h2>
      <p className="mt-2 mb-4">{error.message}</p>
      {error?.stack && (
        <Details label="View the stack trace">
          <Code content={error.stack} />
        </Details>
      )}
    </div>
  );
}
