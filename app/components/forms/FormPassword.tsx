import { useState } from 'react';
import { useField } from 'remix-validated-form';

export const FormPassword = () => {
  const { error, getInputProps } = useField('password');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 16;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  return (
    <div className="flex flex-col gap-1 my-4">
      <div className="flex justify-between gap-8 text-xs">
        <label htmlFor="password" className="block font-medium text-gray-700">
          {error ? (
            <span className="pl-1 text-red-800">{error}</span>
          ) : (
            'Password'
          )}
        </label>
        <button
          type="button"
          onClick={() => generatePassword()}
          className="underline hover:text-indigo-500"
        >
          Generate Password
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          {...getInputProps({ id: 'password', value: password })}
          type={showPassword ? 'text' : 'password'}
          className="flex-grow block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <div className="flex-grow-0">
          <button
            type="button"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <span className="sr-only">Show/hide password</span>
            {showPassword ? '🙈' : '👀 '}
          </button>
        </div>
      </div>
    </div>
  );
};
