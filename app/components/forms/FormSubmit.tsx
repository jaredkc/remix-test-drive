import { useNavigation } from '@remix-run/react';

type Props = {
  label: string;
};

export const FormSubmit = ({ label }: Props) => {
  const navigation = useNavigation();

  return (
    <button type="submit" className="btn">
      {navigation.state === 'submitting' ? 'Submitting...' : label}
    </button>
  );
};
