import { generateIdAttr } from '~/utils/form-utils';

type Props = {
  defaultValue?: string | number;
  error?: string;
  helpText?: string;
  label: string;
  name: string;
  pattern?: string;
  required?: boolean;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
};

export const FormInput = ({
  defaultValue = '',
  error,
  helpText,
  label,
  name,
  pattern,
  required = false,
  type = 'text',
}: Props) => {
  const id = generateIdAttr(`${name}-${label}`);

  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="form-required">*</span>}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        defaultValue={defaultValue}
        className="form-input"
        required={required}
        pattern={pattern}
      />
      {helpText ? <div className="form-help">{helpText}</div> : null}
      {error ? <div className="form-error">{error}</div> : null}
    </div>
  );
};
