import clsx from 'clsx';

type Props = {
  title: string;
  children?: React.ReactNode;
  type: 'success' | 'error';
};

export const Alert = ({ title, children, type }: Props) => {
  const isError = type === 'error' ? true : false;
  return (
    <div
      className={clsx(
        'p-4 mb-6 rounded-md',
        isError ? 'bg-red-50' : 'bg-green-50'
      )}
    >
      <h2
        className={clsx(
          'm-0 text-sm font-medium',
          isError ? 'text-red-800' : 'text-green-800'
        )}
      >
        {title}
      </h2>
      {children && (
        <div
          className={clsx(
            'mt-2 text-xs',
            isError ? 'text-red-700' : 'text-green-700'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
