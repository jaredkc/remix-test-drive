import { useTransition } from '@remix-run/react';

type Props = {
  label: string;
};

export const FormSubmit = ({ label }: Props) => {
  const transition = useTransition();

  return (
    <button
      type="submit"
      className="px-8 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {transition.state === 'submitting' ? 'Submitting...' : label}
    </button>
  );
};
