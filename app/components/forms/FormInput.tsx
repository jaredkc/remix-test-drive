import { useField } from 'remix-validated-form';

type FormInputProps = {
  name: string;
  label: string;
  type: 'email' | 'number' | 'password' | 'url' | 'text';
};

export const FormInput = ({ name, label, type }: FormInputProps) => {
  const { error, getInputProps } = useField(name);

  return (
    <div className="flex flex-col gap-1 my-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...getInputProps({ id: name })}
        type={type}
        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
      {error && <span className="my-error-class">{error}</span>}
    </div>
  );
};
