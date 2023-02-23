import { generateIdAttr } from '~/utils/form-utils';

type FormInputProps = {
  checked?: boolean;
  error?: string;
  helpText?: string;
  label: string;
  name: string;
  required?: boolean;
  value?: string;
};

export const FormCheckbox = ({
  checked = false,
  error,
  helpText,
  label,
  name,
  required = false,
  value,
}: FormInputProps) => {
  const id = generateIdAttr(`${name}-${label}`);

  return (
    <div>
      <label htmlFor={id} className="form-label-checkbox">
        <input
          defaultChecked={checked}
          id={id}
          name={name}
          required={required}
          type="checkbox"
          value={value ? value : label}
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
