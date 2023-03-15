import { useTransition } from '@remix-run/react';

type Props = {
  label: string;
};

export const FormSubmit = ({ label }: Props) => {
  const transition = useTransition();

  return (
    <button type="submit" className="btn">
      {transition.state === 'submitting' ? 'Submitting...' : label}
    </button>
  );
};
