import { useState } from 'react';
import { generateIdAttr, generatePassword } from '~/utils/form-utils';

type Props = {
  error?: string;
  label?: string;
  name?: string;
  required?: boolean;
};

export const FormPassword = ({
  error,
  label = 'Password',
  name = 'password',
  required = false,
}: Props) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const id = generateIdAttr(`${name}-${label}`);

  const handleGeneratePassword = () => {
    setValue(generatePassword());
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
        <button
          type="button"
          onClick={handleGeneratePassword}
          className="form-label__action"
        >
          Generate Password
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="form-input"
          id={id}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          required={required}
          type={showPassword ? 'text' : 'password'}
          value={value}
        />
        <div className="flex-grow-0">
          <button
            type="button"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            className="mt-1"
          >
            <span className="sr-only">Show/hide password</span>
            {showPassword ? 'hide' : 'view'}
          </button>
        </div>
      </div>
      {error ? <div className="form-error">{error}</div> : null}
    </div>
  );
};
