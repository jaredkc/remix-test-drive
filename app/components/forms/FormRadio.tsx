import { generateIdAttr } from '~/utils/form-utils';

type FormInputProps = {
  checked?: boolean;
  error?: string;
  helpText?: string;
  label: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormRadio = ({
  checked = false,
  error,
  helpText,
  label,
  name,
  required = false,
  value,
  onChange,
}: FormInputProps) => {
  const id = generateIdAttr(`${name}-${label}`);

  return (
    <div>
      <label htmlFor={id} className="form-label-radio">
        <input
          defaultChecked={checked}
          id={id}
          name={name}
          required={required}
          type="radio"
          value={value ? value : label}
          onChange={onChange}
        />
        <div>
          {label}
          {required && <span className="form-required">*</span>}
        </div>
      </label>
      {helpText ? <div className="form-help">{helpText}</div> : null}
      {error ? <div className="form-error">{error}</div> : null}
    </div>
  );
};
